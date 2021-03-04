import topic from '@/cfg/topic';
import SRCB_O2LOGIN from '@/api/util/http';
import {TEMPLATE_ID} from "../../../cfg/resource";

class ALL_ROLE_RESOURCE_LIST extends SRCB_O2LOGIN {
    constructor () {
        super(
            {
                url: topic.businessUserTopic + "/role/listRoleResourceTree",
                method: 'post'
            },
            {version: '2.0'}
        );
    }

    async getData (template) {
        return new Promise((resolve, reject) => {
            super.commit({template}).then((data) => {
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }
}

class ROLE_RESOURCE_LIST extends SRCB_O2LOGIN {
    constructor () {
        super(
            {
                url: topic.businessUserTopic + "/role/listRoleResId",
                method: 'get'
            },
            {version: '2.0'}
        );
    }

    getRole (resourceList, roleId) {
        return new Promise((resolve, reject) => {
            super.rest(roleId).then((data) => {
                let selectedResourceList = GET_ROLE_SELECT(resourceList, data);
                resolve(selectedResourceList);
            }, (err) => {
                reject(err);
            });
        });
    }
};

function unique (arr) {
    return Array.from(new Set(arr));
}

class UPDATE_ROLE_RESOURCE extends SRCB_O2LOGIN {
    constructor() {
        super(
            {
                url: topic.businessUserTopic + "/role/doAssignResource",
                method: 'post'
            },
            {version: '2.0'}
        );
    }

    commit (resourceList, roleId) {
        let list = [];

        resourceList.forEach(item => {
            if (item.resId !== undefined) {
                list.push(item.resId);
            }
        });

        list = unique(list);

        var param = {
            "resIds": list,
            "roleId": roleId
        };

        return new Promise((resolve, reject) => {
            super.commit(param).then((data) => {
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }
};

const GET_ROLE_SELECT =  (resourceListDefine, resourceListRole) => {
    let resourceIdList = [];
    let fineResource = (resourceId) => {
        return resourceListRole.find((resource) => {
            return resourceId === resource;
        });
    }
    resourceListDefine.forEach((resourceDefine) => {
        if (resourceDefine.resId && fineResource(resourceDefine.resId)) {
            resourceIdList.push(resourceDefine.id);
        }
        if (resourceDefine.children) {
            resourceIdList = resourceIdList.concat(GET_ROLE_SELECT(resourceDefine.children, resourceListRole));
        }
    });
    return unique(resourceIdList);
}

export default class ROLE_MANAGE {
    constructor () {
        this._roleList = new ROLE_RESOURCE_LIST();
        this._initRoleList = new ALL_ROLE_RESOURCE_LIST();
        this._updateRole = new UPDATE_ROLE_RESOURCE();
        this.roleListDefine = {};
    }

    async initRoleList (template) {
        if (!this.roleListDefine[template]) {
          this.roleListDefine[TEMPLATE_ID] = await this._initRoleList.getData(TEMPLATE_ID);
          this.roleListDefine['small-app'] = await this._initRoleList.getData("small-app");//临时方案
        }
        return this.roleListDefine[template];
    }

    async getRole (roleId) {
        let define = this.roleListDefine;
        let list = define[TEMPLATE_ID].concat(define['small-app']);
        let roleList = await this._roleList.getRole(list, roleId);
        return roleList;
    }

    async updateRole (resourceList, roleId) {
        return await this._updateRole.commit(resourceList, roleId);
    }
}
