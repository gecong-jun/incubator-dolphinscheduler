import topic from './topic'

export const monitorAPI = {

  searchKind: topic.monitorTopic + "/web/monitorKind/searchKind",//分页查询规则分类列表
  listKind: topic.monitorTopic + "/web/monitorKind/listKind",//查询规则分类列表
  addKind: topic.monitorTopic + "/web/monitorKind/addKind",//添加数据源分类信息
  updateKind: topic.monitorTopic + "/web/monitorKind/updateKind",//修改数据源分类信息
  delKind: topic.monitorTopic + "/web/monitorKind/delKind",//删除数据源分类信息
  getKind: topic.monitorTopic + "/web/monitorKind/getKind",//获取数据源分类信息


  addAviator: topic.monitorTopic + "/aviator/addAviator",//获取数据源分类信息
  modifyAviator: topic.monitorTopic + "/aviator/modifyAviator",//获取数据源分类信息
  changeAviatorStatus: topic.monitorTopic + "/aviator/changeAviatorStatus",//基础规则启用禁用
  queryAviatorsByPage: topic.monitorTopic + "/aviator/queryAviatorsByPage",//获取数据源分类信息
  queryAviators: topic.monitorTopic + "/aviator/queryAviators",//获取数据源分类信息
  queryAviatorById: topic.monitorTopic + "/aviator/queryAviatorById",//获取数据源分类信息
  delAviatorRule: topic.monitorTopic + "/aviator/delAviatorRule",//删除基础规则
  listAviators: topic.monitorTopic + "/aviator/listAviators",//获取基础规则List信息

  addAviatorCondition: topic.monitorTopic + "/aviator/addAviatorCondition",//获取数据源分类信息
  modifyAviatorCondition: topic.monitorTopic + "/aviator/modifyAviatorCondition",//获取数据源分类信息
  delAviatorCondition: topic.monitorTopic + "/aviator/delAviatorCondition",//获取数据源分类信息
  queryAviatorConditionsByPage: topic.monitorTopic + "/aviator/queryAviatorConditionsByPage",//获取数据源分类信息
  queryAviatorConditionById: topic.monitorTopic + "/aviator/queryAviatorConditionById",//获取数据源分类信息

  addSqlRule: topic.monitorTopic + "/web/sqlrule/addSqlRule",//获取数据源分类信息
  updateSqlRule: topic.monitorTopic + "/web/sqlrule/updateSqlRule",//获取数据源分类信息
  delSqlRule: topic.monitorTopic + "/web/sqlrule/delSqlRule",//获取数据源分类信息
  getSqlRule: topic.monitorTopic + "/web/sqlrule/getSqlRule",//获取数据源分类信息
  searchSqlRule: topic.monitorTopic + "/web/sqlrule/searchSqlRule",//获取数据源分类信息
  switchKindById:topic.monitorTopic + "/web/sqlrule/switchKindById",//启用禁用SQL规则
  listSqlRule: topic.monitorTopic + "/web/sqlrule/listSqlRule",//获取SQL规则List信息

  queryAgendasByPage: topic.monitorTopic + "/agenda/queryAgendasByPage",//获取数据源分类信息
  queryAgendaById: topic.monitorTopic + "/agenda/queryAgendaById",//获取数据源分类信息
  queryEsData: topic.monitorTopic + "/es/queryEsData"//获取数据源分类信息
};