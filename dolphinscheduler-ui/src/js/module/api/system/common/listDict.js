import topic from '../../../cfg/topic';
import SRCB_O2LOGIN from '../../../api/util/http';

export default class LIST_DICT extends SRCB_O2LOGIN {
    constructor() {
        super(
            {
                url: topic.businessUserTopic + "/dict/listDictItem",
                method: 'post',
            },
            {version: '2.0'}
        );
    }

    async commit(params) {
        let realParams = params;
        if (!realParams) {
            realParams = this.config.params;
        }

        return new Promise((resolve, reject) => {
            super.commit(realParams).then((data) => {
                let i = 0;
                let quickSetting = data.map(item => {
                    return {
                        "key": i++,
                        "label": item['itemName'],
                        "value": item['itemValue']
                    };
                });

                resolve(quickSetting);
            }, (err) => {
                console.log("error", err)
                reject(err);
            });
        });
    }

    async list(params) {
        return super.list(params).then((data) => {
        });
    }
}
