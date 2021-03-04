import topic from '@/cfg/topic';
import SRCB_O2LOGIN from '@/api/util/http';

export default class USER_SETTING extends SRCB_O2LOGIN {
    constructor () {
      super(
        {
          url:topic.businessUserTopic + "/user/",
          method:'POST'
        },
        {version:'2.0'}
      );
      this.setUrl = this.config.url + 'setUserQuickSettngs';
      this.getUrl = this.config.url + 'getUserQuickSettngs';
    }

    getData () {
        return new Promise((resolve, reject) => {
            super.commit(null, this.getUrl, {method:'GET'}).then((data) => {
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }

    setData (data) {
        return new Promise((resolve, reject) => {
            super.commit({userContext:data}, this.setUrl, {method:'POST'}).then((data2) => {
                resolve(data2);
            }, (err) => {
                reject(err);
            });
        })
    }
}    