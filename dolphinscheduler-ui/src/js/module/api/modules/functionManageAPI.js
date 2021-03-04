import topic from './topic'
export const functionManageAPI = {

    addFunction: topic.manageBcip + "/function/addFunction",
    queryFunctionPage: topic.manageBcip + "/function/queryFunctionPage",
    deleteFunction: topic.manageBcip + "/function/deleteFunction/",
    updateFunction: topic.manageBcip + "/function/updateFunction",
    getFunction: topic.manageBcip + "/function/getFunction",
    getFunctionList: topic.manageBcip + "/function/getFunctionList",

    importFunction: topic.manageBcip + "/functionBatch/file/importFunction",
    exportFunction: topic.manageBcip + "/functionBatch/file/exportFunction",
};
