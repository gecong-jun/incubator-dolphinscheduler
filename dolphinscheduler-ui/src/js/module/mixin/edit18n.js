import ING_API from    '../../module/api/system/common/international.js';                  '@/api/system/common/international.js';
const i18nMgr = new ING_API();

export function generateLangData (langs, rows) {
    rows.forEach((row) => {
        langs.forEach((lang) => {
            let langData = row.langs.find((dLang) => {
                return dLang.locale === lang;
            });

            row[lang] = (langData) ? langData.context : null;
            row[lang + '_old'] = row[lang];
        });
    });
    return rows;
}

export default {
    methods:{
        commitI18n (langType, rowData) {
            if (rowData[langType] && rowData[langType] !== rowData[langType + '_old']) {
                i18nMgr.commit({
                    appId:rowData.appId,
                    context:rowData[langType],
                    i18nKey:rowData.resI18n,
                    locale:langType
                });
            }
        }
    }
}