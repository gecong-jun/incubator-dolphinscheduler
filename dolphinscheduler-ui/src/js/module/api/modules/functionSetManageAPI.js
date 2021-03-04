import topic from './topic'
export const fsm = {

    addFunctionSet: topic.manageBcip + "/function-set/addFunctionSet",
    queryFunctionSetPage: topic.manageBcip + "/function-set/queryFunctionSetPage",
    deleteFunctionSet: topic.manageBcip + "/function-set/deleteFunctionSet",
    updateFunctionSet: topic.manageBcip + "/function-set/updateFunctionSet",



    getFunctionSetDetailsBySetId: topic.manageBcip + "/function-set-detail/getFunctionSetDetailsBySetId",


    downloadFunctionSetTemplate: topic.manageBcip + "/functionBatch/downloadFunctionSetTemplate",
    exportFunctionSet: topic.manageBcip + "/functionBatch/exportFunctionSet",
    uploadFunctionSet: topic.manageBcip + "/functionBatch/uploadFunctionSet",

    addFunctionSetDetail: topic.manageBcip + "/function-set-detail/addFunctionSetDetail",
    adjustBasicSort: topic.manageBcip + "/function-set-detail/adjustBasicSort",
    adjustUsualSort: topic.manageBcip + "/function-set-detail/adjustUsualSort",

    modifyFuncDetail: topic.manageBcip + "/function-set-detail/modifyFuncDetail",
    deleteFuncDetail: topic.manageBcip + "/function-set-detail/deleteFuncDetail",

    queryModelsBy: topic.manageBcip + "/function-set-range/queryModelsBy",
    addFunctionSetRange: topic.manageBcip + "/function-set-range/addFunctionSetRange",
    addFuncRangeByTerm: topic.manageBcip + "/function-set-range/addFuncRangeByTerm",
    listDevIdsByFuncSetId: topic.manageBcip + "/function-set-range/listDevIdsByFuncSetId",
    getFunctionSetRangeByFunctionSetId: topic.manageBcip + "/function-set-range/getFunctionSetRangeByFunctionSetId",
    getFunctionSetDetailsTreeByAssetNo:topic.manageBcip+"/function-set-range/getFunctionSetDetailsTreeByAssetNo",


};
