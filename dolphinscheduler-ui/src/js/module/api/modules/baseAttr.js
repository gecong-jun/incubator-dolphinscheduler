import topic from './topic'
export const attrAPI = {

  addBase: topic.manageBcip + "/base/addBase",//添加简单属性
  modifyBase: topic.manageBcip + "/base/modifyBase",//修改简单属性
  batchModifyBase: topic.manageBcip + "/base/batchModifyBase",//批量修改简单属性
  delBaseById: topic.manageBcip + "/base/delBaseById",//删除简单属性
  batchDelBase: topic.manageBcip + "/base/batchDelBase",//批量删除简单属性
  queryBaseByPage: topic.manageBcip + "/base/queryBaseByPage",//分页查询简单属性
  queryBaseById: topic.manageBcip + "/base/queryBaseById",//分页查询简单属性
  modifyModelBase: topic.manageBcip + "/base/modifyModelBase",//分页查询简单属性
  queryModel: topic.manageBcip + "/base/queryModel",//分页查询简单属性
  getMTermDTODeclaredFieldsInfo: topic.manageBcip + "/base/getMTermDTODeclaredFieldsInfo",//获取终端信息表实体类字段信息
  listSysParam: topic.manageBcip + "/base/listSysParam",//获取终端信息表实体类字段信息


  queryBaseTemplateByPage: topic.manageBcip + "/base/queryBaseTemplateByPage",//分页模糊查询功能基本信息
  batchModifyTemps: topic.manageBcip + "/baseTemplate/batchModifyTemps",//分页查询功能基本信息
  saveOneButtonLoading: topic.manageBcip + "/baseTemplate/saveOneButtonLoading",//一键加载
  updateBaseTemplate: topic.manageBcip + "/baseTemplate/updateBaseTemplate",//一键加载
  deleteBaseTemplate: topic.manageBcip + "/baseTemplate/deleteBaseTemplate",//一键加载

  queryBaseTermByPage: topic.manageBcip + "/baseTerm/queryBaseTermByPage",//分页查询功能基本信息
  queryBaseTerms: topic.manageBcip + "/baseTerm/queryBaseTerms",//分页查询功能基本信息
  batchModifyTerms: topic.manageBcip + "/baseTerm/batchModifyTerms",//修改功能基本信息
  updateBaseTerms: topic.manageBcip + "/baseTerm/updateBaseTerms",//修改功能基本信息


  addMedia: topic.manageBcip + "/media/addMedia",//增加介质
  delMediaById: topic.manageBcip + "/media/delMediaById/",//删除介质
  queryMediaByPage: topic.manageBcip + "/media/queryMediaByPage",//分布查询介质
  listMedia: topic.manageBcip + "/media/listMedia",//查询所有介质
  modifyMedia: topic.manageBcip + "/media/modifyMedia",//修改介质
  getMediaById: topic.manageBcip + "/media/getMediaById/",//查询介质


};