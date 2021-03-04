import topic from '@/cfg/topic';
import SRCB_O2LOGIN from '@/api/util/http';
class ROLE_LIST extends SRCB_O2LOGIN {
    constructor() {
        super(
            {
                url: topic.businessUserTopic + "/role/searchWebRole",
                method: 'POST'
            },
            {version: '2.0'}
        );
    }
    getData (params) {
        return new Promise((resolve, reject) => {
            super.commit(params).then((data) => {
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }
};

class GET_ROLE_INFO extends SRCB_O2LOGIN {
    constructor() {
        super(
            {
                url: topic.businessUserTopic + "/role/getRole",
                method: 'get'
            },
            {version: '2.0'}
        );
    }
    getData (id) {
        return new Promise((resolve, reject) => {
            super.rest(id).then((data) => {
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }
};

class ADD_ROLE_INFO extends SRCB_O2LOGIN {
    constructor() {
        super(
            {
                url: topic.businessUserTopic + "/role/addRole",
                method: 'post'
            },
            {version: '2.0'}
        );
    }
    commit (role) {
        return new Promise((resolve, reject) => {
            super.commit(role).then((data) => {
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }
};

class UPDATE_ROLE_INFO extends SRCB_O2LOGIN {
    constructor() {
        super(
            {
                url: topic.businessUserTopic + "/role/updateRole",
                method: 'post'
            },
            {version: '2.0'}
        );
    }
    commit (role) {
        return new Promise((resolve, reject) => {
            super.commit(role).then((data) => {
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }
};

class DELETE_ROLE_INFO extends SRCB_O2LOGIN {
    constructor() {
        super(
            {
                url: topic.businessUserTopic + "/role/delRole",
                method: 'delete'
            },
            {version: '2.0'}
        );
    }

    delete (roleId) {
        return new Promise((resolve, reject) => {
            super.delete(roleId).then((data) => {
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }
};




export default class ROLE_MANAGE {
    constructor () {
        this._myRoleList = new ROLE_LIST();
        this._getRoleInfo = new GET_ROLE_INFO();
        this._addRoleInfo = new ADD_ROLE_INFO();
        this._updateRoleInfo = new UPDATE_ROLE_INFO();
        this._deleteRoleInfo = new DELETE_ROLE_INFO();
    }

    async getMyRoleList (params) {
        let roleList = await this._myRoleList.getData(params);
        return roleList;
    }

    async getRoleInfo (roleId) {
        let roleInfo = await this._getRoleInfo.getData(roleId);
        return roleInfo;
    }

    async addRoleInfo (role) {
        return await this._addRoleInfo.commit(role);
    }

    async updateRoleInfo (role) {
        return await this._updateRoleInfo.commit(role);
    }

    async deleteRoleInfo (roleId) {
        return await this._deleteRoleInfo.delete(roleId);
    }
}
