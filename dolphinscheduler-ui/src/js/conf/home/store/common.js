// import {loadLanguageAsync} from '@/lang';
import {TEMPLATE_ID} from   '../../../module/cfg/resource';

const common = {
  state: {
    defaultImg: '',
    curTempId: TEMPLATE_ID,
    curLang: ''
  },
  getters: {
    defaultImg: state => state.defaultImg,
    curTempId: state => state.curTempId,
    curLang: state => state.curLang
  },
  mutations: {
    SET_CurLang(state, lang) {
      state.curLang = lang;
    },
    setTempId(state, tempId) {
      state.curTempId = tempId;
    },
  },
  actions: {
    setCurLang({commit}, {lang}) {
      commit('SET_CurLang', lang);
    }
  }
};
export default common
