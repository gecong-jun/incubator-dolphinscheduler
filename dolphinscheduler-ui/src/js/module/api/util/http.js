import $gwi from 'gwi-base';
import {MessageBox, Message} from 'element-ui';
import getConfig from  '../../cfg/getConfig';
import '../../../conf/home/store';
import router from '../../../conf/home/router';
import i18n from '../../lang';
let missCount = 0;

export default class SRCB_O2LOGIN extends $gwi.http.o2Login {
  constructor(params, extendConfig) {
    let config = getConfig.getConfig();
    super(params, config, extendConfig);

    this.config.errorHandle = (resData) => {
      var index = resData.stateCode.indexOf("_") + 1;
      var code = resData.stateCode.substring(index);
      console.log("####【状态码】####：", code);
      if (code == '100005' || code == '100007' || code === '100032') {// 'token 超时‘
        let message = resData.cause + ',' + resData.solution;
        if (code === '100007') {
          message = '登录已失效，请重新登录';
        }
        this.missToken(message);
      } else if (code === '100001') {
        Message({
          showClose: true,
          message: resData.cause,
          type: 'error'
        });
      } else {
        MessageBox.alert(resData.cause, {
          title: resData.solution || resData.stateMsg,
          customClass: 'topMsg'
        });
      }
    }
  }

  missToken(message) {
    console.log("miss count ......", missCount)
    if (missCount > 0) return
    missCount = 1;
    MessageBox.alert(message, i18n.t('ui.common.tips'), {
      callback: action => {
        missCount = 0;
        store.commit('logout');
        this.storageMgr.removeToken();
        this.storageMgr.setSession("userInfo", '')
        if (this.configSet.isExternalLogin) {
          let url = this.configSet.externalLogoutUrl;
          window.location.href = url;// 外部登出
        } else {
          router.push({name: 'srcbLogin'});
        }
      }
    });
  }
}
