import topic from '../../../../module/cfg/topic';
import SRCB_O2LOGIN from '../../../../module/api/util/http';
import store from   '../../../../conf/home/store';
import {FOLDER, VIEW, MENU} from '@/cfg/resource';

const generateLang = (rows, langs) => {
    rows.forEach((row) => {
        langs.forEach((lang) => {
            let langData;
            if (row.langs) {
                langData = row.langs.find((dLang) => {
                    return dLang.locale === lang;
                });
            }
            row[lang] = (langData) ? langData.context : null;
            row[lang+'_old'] = row[lang];
        });

        if (row.children) {
            row.children = generateLang(row.children, langs);
        }
    });
    return rows;
}


class ADD_FOLDER extends SRCB_O2LOGIN {
    constructor() {
        super(
            {
                url: topic.businessUserTopic + "/resourceShow/addWebResourceShow",
                method: 'post',
            },
            {version: '2.0'}
        );
    }

    commit(params) {
        params.show = params.resType == 0;
        params.template = store.getters.curTempId;
        return new Promise((resolve, reject) => {
            super.commit(params).then((data) => {
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }
}

class ADD_FOLDER_LIST extends SRCB_O2LOGIN {
    constructor() {
        super(
            {
                url: topic.businessUserTopic + "/resourceShow/addMultipleWebResourceShow",
                method: 'post',
            },
            {version: '2.0'}
        );
    }

    commit(params) {
        params.forEach(param => {
            param.show = param.resType == 0;
            param.template = store.getters.curTempId;
        })
        return new Promise((resolve, reject) => {
            super.commit({list: params}).then((data) => {
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }
}

class REMOVE_FOLDER extends SRCB_O2LOGIN {
    constructor() {
        super(
            {
                url: topic.businessUserTopic + "/resourceShow/delWebResourceShow",
                method: 'DELETE',
            },
            {version: '2.0'}
        );
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            super.delete(id).then((data) => {
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }
}

class LIST_RESOURCE_TREE extends SRCB_O2LOGIN {
    constructor() {
        super(
            {
                url: topic.businessUserTopic + "/resourceShow/listWebResourceShowTree",
                method: 'post',
                params: {
                    "template": store.getters.curTempId,
                },
            },
            {version: '2.0'}
        );
    }

    async commit(params, langs) {
        let realParams = params;
        this.config.params.template = store.getters.curTempId;

        if (params) {
            realParams = Object.assign({}, this.config.params, params);
        } else {
            realParams = this.config.params;
        }

        return new Promise((resolve, reject) => {
            super.commit(realParams).then((data) => {
                if (langs) {
                    data = generateLang(data, langs);
                }
                // this.sortResource(data)
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }

    sortResource(res) {
        if (res && res.length > 1) {
            res.sort((a, b) => {
                return a.sortNum - b.sortNum;
            })
            res.forEach(item => {
                if (item.children) {
                    this.sortResource(item.children);
                }
            })
        }
    }
}

class UPDATE_RESOURCE_SHOW extends SRCB_O2LOGIN {
    constructor() {
        super(
            {
                url: topic.businessUserTopic + "/resourceShow/updateWebResourceShow",
                method: 'post',
            },
            {version: '2.0'}
        );
    }

    commit(_data) {
        _data.template = store.getters.curTempId;
        return new Promise((resolve, reject) => {
            super.commit(_data).then((data) => {
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }
}

class TOGGLE_RESOURCE_SHOW extends SRCB_O2LOGIN {
    constructor() {
        super(
            {
                url: topic.businessUserTopic + "/resourceShow/towageWebResourceShowTree",
                method: 'post',
            },
            {version: '2.0'}
        );
    }

    commit(_data) {
        _data.template = store.getters.curTempId;
        return new Promise((resolve, reject) => {
            super.commit(_data).then((data) => {
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }
}

export default class RESOURCE_SHOW {
    constructor() {
        this._updateResourceShow = new UPDATE_RESOURCE_SHOW();
        this._listResourceTree = new LIST_RESOURCE_TREE();
        this._addFolder = new ADD_FOLDER();
        this._removeFolder = new REMOVE_FOLDER();
        this._addFolderList = new ADD_FOLDER_LIST();
        this._toggleResourceShow = new TOGGLE_RESOURCE_SHOW();
    }

    async listResourceTree(params, langs) {
        return this._listResourceTree.commit(params, langs);
    }

    updateResourceShow(resourceObj) {
        return this._updateResourceShow.commit(resourceObj);
    }

    addResourceShow(params) {
        return this._addFolder.commit(params);
    }

    addResourceShowList(params) {
        return this._addFolderList.commit(params);
    }

    removeResourceShow(id) {
        return this._removeFolder.delete(id);
    }

    toggleResourceShow(params) {
        return this._toggleResourceShow.commit(params)
    }

}
