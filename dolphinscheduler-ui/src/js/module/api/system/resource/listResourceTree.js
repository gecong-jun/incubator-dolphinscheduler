import topic from '../../../../module/cfg/topic';
import SRCB_O2LOGIN from '../../../../module/api/util/http';
import {FOLDER, VIEW, MENU} from '../../../../module/cfg/resource';

export default class LIST_RESOURCE_TREE extends SRCB_O2LOGIN {
    constructor () {
      super(
        {
          url:topic.businessUserTopic + "/resourceShow/listResourceShowTree",
          method:'post',
        },
        {version:'2.0'}
      );
    }

    async commit () {
      return new Promise((resolve, reject) => {
        super.commit().then((data) => {
          if (data.length === 0) {
            reject({msg:"用户没有菜单权限，请检查用户是否有角色"});
          } else {
            let resList = data.map((res) => {
              return Object.assign(res, {
                type:res.show ? FOLDER : res.resType
              });
            });
            resolve(resList);
          }   
        }, (err) => {
          reject(err);
        });
      });
    }
}    