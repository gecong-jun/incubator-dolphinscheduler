import topic from  '../../../../module/cfg/topic';
import SRCB_O2LOGIN from   '../../../../module/api/util/http';
import {generateLangData} from  '../../../mixin/edit18n';
import store from   '../../../../conf/home/store';
import {TEMPLATE_ID} from  '../../../../module/cfg/resource';  

class ADD_RESOURCE extends SRCB_O2LOGIN {
    constructor () {
        super(
            {
                url: topic.businessUserTopic + "/resource/addWebResource",
                method: 'post'
            },
            {version: '2.0'}
        );
    }


    commit(resourceObj) {
        return new Promise((resolve, reject) => {
            super.commit(resourceObj).then((data) => {
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }
}

class ADD_RESOURCE_AND_SHOW extends SRCB_O2LOGIN {
    constructor() {
        super(
            {
                url: topic.businessUserTopic + "/resource/addWebResourceAndShow",
                method: 'post'
            },
            {version: '2.0'}
        );
    }

    commit(resourceObj) {
        return new Promise((resolve, reject) => {
            super.commit(resourceObj).then((data) => {
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }
}

class REMOVE_RESOURCE extends SRCB_O2LOGIN {
    constructor() {
        super(
            {
                url: topic.businessUserTopic + "/resource/delWebResource",
                method: 'delete',
            },
            {version: '2.0'}
        );
    }

    delete(id, url) {
        return new Promise((resolve, reject) => {
            super.delete(id, url).then((data) => {
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }
}

class REMOVE_RESOURCE_AND_SHOW extends SRCB_O2LOGIN {
    constructor() {
        super(
            {
                url: topic.businessUserTopic + "/resource/deleteWebResourceAndShow",
                method: 'delete',
            },
            {version: '2.0'}
        );
    }

    delete(id, url) {
        return new Promise((resolve, reject) => {
            super.delete(id, url).then((data) => {
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }
}

class GET_RESOURCE extends SRCB_O2LOGIN {
    constructor() {
        super(
            {
                url: topic.businessUserTopic + "/resource/getWebResource",
                method: 'get',
            },
            {version: '2.0'}
        );
    }

    get(id) {
        return new Promise((resolve, reject) => {
            super.get(id).then((data) => {
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }
}

class UPDATE_RESOURCE extends SRCB_O2LOGIN {
    constructor() {
        super(
            {
                url: topic.businessUserTopic + "/resource/updateWebResource",
                method: 'post',

            },
            {version: '2.0'}
        );
    }

    commit(folderData) {
        return new Promise((resolve, reject) => {
            super.commit(folderData).then((data) => {
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }
}

class LIST_RESOURCE extends SRCB_O2LOGIN {
    constructor() {
        super(
            {
                url: topic.businessUserTopic + "/resource/listWebResource",
                method: 'post',
                params: {
                    "appId": null,
                    "channelType": 0,
                    "ids": [],
                    "likeResCode": null,
                    "likeResName": null,
                    "positionId": null,
                    "resCode": null,
                    "resName": null,
                    "resType": null,
                    "roleIds": [],
                    "userId": null
                }
            },
            {version: '2.0'}
        );
    }

    commit(params) {
        let realParams = params;
        if (!realParams) {
            realParams = this.config.params;
        }
        realParams.channelType = store.getters.curTempId === TEMPLATE_ID ? 0 : 1;

        return new Promise((resolve, reject) => {
            super.commit(realParams).then((data) => {
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }
}

class SEARCH_RESOURCE extends SRCB_O2LOGIN {
    constructor() {
        super(
            {
                url: topic.businessUserTopic + "/resource/searchWebResource",
                method: 'post',
                params: {
                    "pageNum": 1,
                    "pageSize": 10,
                    "likeResCode": null,
                    "likeResName": null,
                }
            },
            {version: '2.0'}
        );
    }

    commit(params, langs) {
        let realParams = {};

        if (params) {
            realParams = Object.assign({}, this.config.params, params);
        } else {
            realParams = this.config.params;
        }

        return new Promise((resolve, reject) => {
            super.commit(realParams).then((data) => {
                if (langs) {
                  data.list = generateLangData(langs, data.list);
                }
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }
}

export default class RESOURCE {
    constructor() {
        this._addResource = new ADD_RESOURCE();
        this._addWebResourceAndShow = new ADD_RESOURCE_AND_SHOW();
        this._removeResource = new REMOVE_RESOURCE();
        this._removeWebResourceAndShow = new REMOVE_RESOURCE_AND_SHOW();
        this._getResource = new GET_RESOURCE();
        this._updateResource = new UPDATE_RESOURCE();
        this._listResource = new LIST_RESOURCE();
        this._searchResource = new SEARCH_RESOURCE();
    }

    addResource(res) {
        return this._addResource.commit(res);
    }

    addWebResourceAndShow(res) {
        return this._addWebResourceAndShow.commit(res);
    }

    removeResource(id) {
        return this._removeResource.delete(id);
    }

    removeWebResourceAndShow(id) {
        return this._removeWebResourceAndShow.delete(id);
    }

    getResource(id) {
        return this._getResource.get(id);
    }

    listResource(res) {
        return this._listResource.commit(res);
    }

    searchResource(res, langs) {
        return this._searchResource.commit(res, langs);
    }

    updateResource (resourceObj) {
        return this._updateResource.commit(resourceObj);
    }
}
