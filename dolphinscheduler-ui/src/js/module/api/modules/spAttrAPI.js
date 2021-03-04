import topic from './topic'
export const spAttrAPI = {

    addSpDevAttrSetTemplate: topic.manageBcip + "/devAttrSpTemplate/addSpDevAttrSetTemplate",//添加SP属性模板基本信息
    updateSpDevAttrSetTemplate: topic.manageBcip + "/devAttrSpTemplate/updateSpDevAttrSetTemplate",//修改SP属性模板基本信息
    querySpDevAttrSetTemplatePage: topic.manageBcip + "/devAttrSpTemplate/querySpDevAttrSetTemplatePage",//查询SP属性模板基本信息
    getSpDevAttrTemplate: topic.manageBcip + "/devAttrSpTemplate/getSpDevAttrTemplate",//获取SP属性模板
    deleteSpDevAttrTemplate: topic.manageBcip + "/devAttrSpTemplate/deleteSpDevAttrTemplate",//删除SP属性信息
    batchDelSpTemplate:topic.manageBcip + "/devAttrSpTemplate/batchDelSpTemplate",//批量删除SP属性信息
    batchSpDevAttrSetTemplate:topic.manageBcip + "/devAttrSpTemplate/batchSpDevAttrSetTemplate",//批量删除SP属性信息
    listSTransferSpTemplate:topic.manageBcip + "/devAttrSpTemplate/listSTransferSpTemplate",//
    listTransferTemplate:topic.manageBcip + "/devAttrSpTemplate/listTransferTemplate",//

    addSpDevAttrSet: topic.manageBcip + "/devAttrSpInfo/addSpDevAttrSet",//添加SP属性模板基本信息
    updateSpDevAttrSet: topic.manageBcip + "/devAttrSpInfo/updateSpDevAttrSet",//修改SP属性模板基本信息
    querySpDevAttrPage: topic.manageBcip + "/devAttrSpInfo/querySpDevAttrSetPage",//查询SP属性模板基本信息
    getSpDevAttr: topic.manageBcip + "/devAttrSpInfo/getSpDevAttr",//获取SP属性模板
    deleteSpDevAttr: topic.manageBcip + "/devAttrSpInfo/deleteSpDevAttr",//删除SP属性信息
    batchDevAttrSpInfo:topic.manageBcip + "/devAttrSpInfo/batchDevAttrSpInfo",//批量修改SP属性信息
    batchDelSp:topic.manageBcip + "/devAttrSpInfo/batchDelSp",//批量删除SP属性信息
    listTransferSp:topic.manageBcip + "/devAttrSpInfo/listTransferSp",//查询sp基础信息

    expSpDevAttrInfo: topic.manageBcip + "/devAttrSpExpImp/expSpDevAttrInfo",//导出SP属性信息
    downloadSpDevAttrInfo: topic.manageBcip + "/devAttrSpExpImp/downloadSpDevAttrInfo",//导出SP属性信息Excel模板
    uploadSpDevAttrInfo: topic.manageBcip + "/devAttrSpExpImp/uploadSpDevAttrInfo",//导入SP属性信息
    uploadSpDevAttrTemplate: topic.manageBcip + "/devAttrSpExpImp/uploadSpDevAttrTemplate",//导入SP属性信息
    expSpDevAttrTemplate: topic.manageBcip + "/devAttrSpExpImp/expSpDevAttrTemplate",//导出SP属性信息
    downloadSpDevAttr: topic.impexpTopic + "/base/operabasefiletemplate/getByCode/importSpAttr",//导出SP属性信息Excel模板
    downloadSpDevAttrTemplate: topic.impexpTopic + "/base/operabasefiletemplate/getByCode/importSpTemplate",//导出SP属性信息Excel模板
    importJson:topic.manageBcip + "/devAttrSpExpImp/importJson",
    exportJson:topic.manageBcip + "/devAttrSpExpImp/exportJson",//
    exportMediaTranInfo:topic.manageBcip + "/mediaTranInfo/exportMediaTranInfo",//
    exportEndDayStatisticsInfo:topic.manageBcip + "/endDayStatisticsInfo/exportEndDayStatisticsInfo",//

    addCardMedia:topic.manageBcip +"/cardMedia/addCardMedia",//增加卡介质
    modifyCardMedia:topic.manageBcip +"/cardMedia/modifyCardMedia",//修改卡介质
    queryCardMediaByPage:topic.manageBcip +"/cardMedia/queryCardMediaByPage",//查询卡介质
    getCardMedia:topic.manageBcip +"/cardMedia/getCardMedia/",//根据id查询卡介质
    delCardMediaById:topic.manageBcip +"/cardMedia/delCardMediaById/",//删除卡介质
    searchEndDayStatisticsInfo:topic.manageBcip +"/endDayStatisticsInfo/searchEndDayStatisticsInfo",//获取日终统计信息集合
    getEndDayStatisticsInfo:topic.manageBcip +"/endDayStatisticsInfo/getEndDayStatisticsInfo",//获取日终统计信息信息
    searchMediaTranInfo:topic.manageBcip +"/mediaTranInfo/searchMediaTranInfo",//获取重控凭证交易信息表集合
    getMediaTranInfo:topic.manageBcip +"/mediaTranInfo/getMediaTranInfo",//获取重控凭证交易信息表信息
    searchMediaTranInfoHis:topic.manageBcip +"/mediaTranInfoHis/searchMediaTranInfoHis",//获取重控凭证交易历史信息表集合
    getMediaTranInfoHis:topic.manageBcip +"/mediaTranInfoHis/getMediaTranInfoHis",//获取重控凭证交易历史信息表信息

    addInvoiceMedia:topic.manageBcip +"/invoiceMedia/addInvoiceMedia",//添加发票业务
    modifyInvoiceMedia:topic.manageBcip +"/invoiceMedia/modifyInvoiceMedia",//修改发票业务
    queryInvoiceMediaByPage:topic.manageBcip +"/invoiceMedia/queryInvoiceMediaByPage",//分页查询发票业务信息
    getInvoiceMedia:topic.manageBcip +"/invoiceMedia/getInvoiceMedia/",//获取发票业务
    delInvoiceMediaById:topic.manageBcip +"/invoiceMedia/delInvoiceMediaById/",//删除发票业务

    listDictItem: topic.businessUserTopic + "/dict/listDictItem",

    addAuthFunction:topic.manageBcip +"/authFunction/addAuthFunction",//增加业务类型
    delAuthFunctionById:topic.manageBcip +"/authFunction/delAuthFunctionById",//删除业务类型
    queryAuthFunctionByPage:topic.manageBcip +"/authFunction/queryAuthFunctionByPage",//查询业务类型
    getAuthFunction:topic.manageBcip +"/authFunction/getAuthFunction",//查询业务类型
    modifyAuthFunction:topic.manageBcip +"/authFunction/modifyAuthFunction",//修改业务类型
    batchDelAuthFunction:topic.manageBcip +"/authFunction/batchDelAuthFunction",//修改业务类型


};
