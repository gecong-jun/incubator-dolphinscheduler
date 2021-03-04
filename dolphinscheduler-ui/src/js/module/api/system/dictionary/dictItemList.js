import topic from  '../../../cfg/topic';
import SRCB_O2LOGIN from '../../../api/util/http';
import {generateLangData} from  '../../../mixin/edit18n';
import {APP_ID} from '../../../cfg/resource';

export default class DICT_ITEM_LIST extends SRCB_O2LOGIN {
    constructor () {
        super(
            {
                url: topic.businessUserTopic + "/dict/searchWebDictItem",
                method: 'post',
            },
            {version: '2.0'}
        );
        this.appId = APP_ID;
    }

    setAppId (appId) {
        this.appId = appId;
    }

    async getData (params, langs) {
        return new Promise((resolve, reject) => {
            super.list(params).then((data) => {
                if (langs) {
                    data.list = data.list.map((item) => {
                        return Object.assign(item, {
                            appId:this.appId,
                            resI18n:item.itemI18n || item.id
                        });
                    });
                    data.list = generateLangData(langs, data.list);  
                }
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });       
    }

    async getDictItemList (code) {
        return new Promise((resolve, reject) => {
            super.list({typeId:code, pageSize:50}).then((data) => {
                const list = data.list.map((status) => {
                    return {
                        label:status.itemName,
                        value:status.itemValue
                    };    
                });
                
                resolve(list);
            }, (err) => {
                reject(err);
            });
        });
    }
}    