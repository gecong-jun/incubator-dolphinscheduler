import topic from '@/cfg/topic';
import SRCB_O2LOGIN from '@/api/util/http';

export default class USER_ACCOUNT_LIST extends SRCB_O2LOGIN {
    constructor () {
      super(
        {
          url:topic.businessUserTopic + "/user/searchWebUser",
          method:'post'
        },
        {version:'2.0'}
      );
    }

    async list (params) {
        return new Promise(async (resolve, reject) => {
            super.list(params).then((data) => {
                resolve(data);
            }, (err) => {
                reject(err);
            })
        });
    }
};    