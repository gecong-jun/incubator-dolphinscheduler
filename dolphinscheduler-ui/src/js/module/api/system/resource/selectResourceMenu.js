import topic from '../../../../module/cfg/topic';
import SRCB_O2LOGIN from '../../../../module/api/util/http';

import RESOURCE from './resource.js';
import DICTIONARY from '../dictionary/dictItemList';
import {FRAME_MODULE} from '../../../../module/cfg/home/workPlatform';
// import {APP_ID, TEMPLATE_ID} from '@/cfg/resource';

export default class SELECT_MENU_RESOURCE {
    constructor () {
        this._resource = new RESOURCE();
        this._dictionary = new DICTIONARY();
    }

    async generateResourceData ({resTypes = null, userId = null, channelType = null}) {
        let data = [];
        if (!resTypes) {
            resTypes = [1, 2, 3];
        }

        return new Promise(async (resolve, reject) => {
            try {

                let systemList = await this._dictionary.getData({
                    pageNum: 1,
                    pageSize: 40,
                    typeId: "748557143463952384"
                });

                console.log('systemList', systemList);
                systemList = systemList.list.filter((system) => {
                    return system.itemValue !== FRAME_MODULE;
                });

                let resourceList = await this._resource.listResource({resTypes, userId, channelType});

                console.log('resourceList', resourceList);

                systemList.forEach((module) => {
                    data.push({
                        label:module.itemName,
                        value:module.itemValue,
                        isLeaf:false,
                        children:[]
                    });
                });

                const findModule = (moduleId) => {
                    return data.find((module) => {
                        return module.value === moduleId;
                    });
                };

                resourceList.forEach((resource) => {
                    let module = findModule(resource.appId);
                    if (module) {
                        module.children.push(Object.assign(resource, {
                            label:resource.resName,
                            value:{
                                resType:resource.resType,
                                resName:resource.resName,
                                resId:  resource.id,
                            },
                            isLeaf:true
                        }));
                    }
                });

                console.log('resource-menu-list', data);
                resolve(data);
            } catch (e) {
                reject(e);
            }
        });
    }
};
