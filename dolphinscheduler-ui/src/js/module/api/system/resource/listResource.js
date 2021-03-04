import topic from '../../../../module/cfg/topic';
import SRCB_O2LOGIN from '../../../../module/api/util/http';
import store from    '../../../../conf/home/store';
import {TEMPLATE_ID} from "../../../cfg/resource";

export default class LIST_RESOURCE extends SRCB_O2LOGIN {
    constructor () {
        super(
            {
                url: topic.businessUserTopic + "/resource/listResource",
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

    async commit(params) {
        let realParams = params;
        if (!realParams) {
            realParams = this.config.params;
        }
        realParams.channelType = store.getters.curTempId === TEMPLATE_ID ? 0 : 1;

        return new Promise((resolve, reject) => {
            super.commit(realParams).then((data) => {
                // let quickSetting = data.map(item => {
                //     return {
                //         type: item.resType,
                //         resCode: item.resCode,
                //         name: item.resName
                //     };
                // });

                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }

    async list(params) {
        return super.list(params).then((data) => {
        });
    }
}
