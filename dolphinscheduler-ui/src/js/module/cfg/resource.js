export const FOLDER = 0;
export const VIEW = 1;
export const BUTTON = 2;
export const API_AUTH = 3;

export const TEMPLATE_ID = 'gwi-zod';
export const APP_ID = 'platform-basic';

export const RESOURCE_DEFINE = new Map([
    [FOLDER, {key:'folder'}],
    [VIEW, {key:'view'}],
    [BUTTON, {key:'button'}]
]);

export const RESOURCE_ACTIONS = {
    RESOURCE_MANAGE:'resourceManage',
    MENU_MANAGE:'menuManage',
    FOLDER_MANAGE:'folderManage',
    INTERNATIONA:'i18nManage'
};

const tableTypeFormatter = (row, column, cellValue, index) => {
    let resourceType = RESOURCE_DEFINE.get(cellValue);
    if (resourceType) {
        return this.$t(`system.resource_et.typeDefine.${resourceType.key}.name`);
    } else {
        return '';
    }
};

const TABLE_COLUMNS = {
    resName: {field: 'resName'},
    resCode:{field:'resCode'},
    resType:{field:'resType', i18nKey:'type', formatter:tableTypeFormatter},
    status: {field: 'status', component: true}
};

const SHOW_COLUMNS = [];

export const COLUMNS = [
    
];

