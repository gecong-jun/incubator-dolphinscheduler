import getConfig from    '../../../cfg/getConfig';
import $gwi from 'gwi-base';
import $store from   '../../../../conf/home/store';

import i18n from  '../../../lang';
import i18nLocale, {loadLanguageAsync} from '../../../lang';

const LANG_DEFINE = {
  'zh_CN': {label: '中文', value: 'zh'},
  'en_US': {label: 'English', value: 'en'}
};

const getStoreLang = () => {
  return $store.getters['curLang'];
}

const StorageMgr = () => {
  let config = getConfig.getConfig();
  return new $gwi.res.storage(config);
};

const getStorageLang = async () => {
  let storage = await StorageMgr();
  return storage.getSession('lang');
};

class LANG_MGR {
  constructor() {
    this.StorageMgr = {};
    this.config = {};
  }

  setConfig(config) {
    this.config = config;
    this.StorageMgr = new $gwi.res.storage(config);
  }

  initLang() {
    let lang = this.getCurLang() || "zh_CN";
    $store.dispatch('setCurLang', lang);
    this.StorageMgr.setSession('lang', lang);
    loadLanguageAsync(LANG_DEFINE[lang].value);
    i18nLocale.locale = LANG_DEFINE[lang].value;
    document.title = i18n.t('system.primaryTitle');
  }

  hasI18n() {
    return this.config.langList.length > 1;
  }

  getLangList() {
    return this.config.langList || [];
  }

  getStorageLang() {
    return this.StorageMgr.getSession('lang');
  }

  getCurLang() {
    return this.getStorageLang() || getStoreLang() || this.config.locale;
  }

  setCurLang(lang) {
    $store.dispatch('setCurLang', lang);
    loadLanguageAsync(LANG_DEFINE[lang].value);
    this.StorageMgr.setSession('lang', lang);
    window.location.reload();
  }

  getLangOptionList() {
    let list = [];
    if (!this.config.langList) {
      return list;
    }
    this.config.langList.forEach((lang) => {
      list.push({
        value: lang,
        label: LANG_DEFINE[lang].label
      });
    });
    return list;
  }
}

const i18Mgr = new LANG_MGR();

export default i18Mgr;
