import topic from './topic'

export const dasAPI = {
  //数据分类
  addKind:topic.dasTopic + "/web/kind/addKind",//添加数据源分类信息
  updateKind:topic.dasTopic + "/web/kind/updateKind",//修改数据源分类信息
  delKind:topic.dasTopic + "/web/kind/delKind",//删除数据源分类信息
  getKind:topic.dasTopic + "/web/kind/getKind",//获取数据源分类信息
  searchKind:topic.dasTopic + "/web/kind/searchKind",//获取数据源分类信息(分页）
  listKind:topic.dasTopic + "/web/kind/listKind",//获取数据源分类信息
  switchKindById: topic.dasTopic + "/web/kind/switchKindById", //切换分类状态

  //数据源
  addSource:topic.dasTopic + "/web/datasource/addDataSource", //添加数据源
  updateSource:topic.dasTopic + "/web/datasource/updateDataSource", //修改数据源
  delSource:topic.dasTopic + "/web/datasource/delDataSource", //删除数据源
  getSource:topic.dasTopic + "/web/datasource/getDataSource", //获取数据源
  searchSource:topic.dasTopic + "/web/datasource/searchDataSource", //获取数据源集合(分页）
  getDataBaseTemplate:topic.dasTopic + "/web/datasource/getDataBaseTemplate", //得到数据源支持的数据库类型模板
  listSource:topic.dasTopic + "/web/datasource/listhDataSource", //获取数据源集合
  startDataSource:topic.dasTopic + "/web/datasource/startDataSource", //启用禁用数据源
  updateDataSourceTopic:topic.dasTopic + "/web/datasource/updateDataSourceTopic", //topic维护
  switchDataSourceById:topic.dasTopic + "/web/datasource/switchDataSourceById", //切换数据源状态
  getDbType:topic.dasTopic + "/web/datasource/getDbType/", //获取数据库类型

  //数据同步
  addTable:topic.dasTopic + "/web/table/addTable", //添加数据同步
  updateTable:topic.dasTopic + "/web/table/updateTable", //添加数据同步
  delTable:topic.dasTopic + "/web/table/delTable", //删除数据同步
  getTable:topic.dasTopic + "/web/table/getTable", //获取数据同步
  searchTable:topic.dasTopic + "/web/table/searchTable", //获取数据同步信息（分页）
  listTable:topic.dasTopic + "/web/table/listTable", //获取数据同步信息
  switchTableById:topic.dasTopic + "/web/table/switchTableById", //切换表状态
  querySchemaList:topic.dasTopic + "/web/database/querySchemaList", // 查询schema列表
  queryTableList:topic.dasTopic + "/web/database/queryTableList", // 查询表列表
  queryTableColumnMeta: topic.dasTopic + "/web/database/queryTableColumnMeta",//获取指定查询SQL的元信息
  queryTablePrimaryKeys: topic.dasTopic + "/web/database/queryTablePrimaryKeys", // 查询主键
  resetOffset: topic.dasTopic + "/web/table/resetOffset", //重置

  // 数据元
  formatSQL: topic.dasTopic + "/web/database/formatSQL", // 格式化sql
  testQuerySQL: topic.dasTopic + "/web/database/testQuerySQL", // 测试sql有效性
  querySelectSqlColumnMeta: topic.dasTopic + "/web/database/querySelectSqlColumnMeta",//获取指定查询SQL的元信息

  // 取数管理
  addFetchData:topic.dasTopic + "/web/fetch/addFetchData", //添加取数信息
  delFetchData:topic.dasTopic + "/web/fetch/delFetchData", //删除取数信息
  getFetchData:topic.dasTopic + "/web/fetch/getFetchData", //获取取数信息
  updateFetchData:topic.dasTopic + "/web/fetch/updateFetchData", //修改取数信息
  searchFetchData:topic.dasTopic + "/web/fetch/searchFetchData", //获取取数信息集合(分页）
  listFetchData:topic.dasTopic + "/web/fetch/listFetchData", //获取取数信息集合
  switchFetchDataById:topic.dasTopic + "/web/fetch/switchFetchDataById", //切换取数状态
  resetFetchOffset: topic.dasTopic + "/web/fetch/resetOffset", //重置

  // ES集群
  addEsCluster:topic.dasTopic + "/web/esCluster/addEsCluster", //添加ES集群信息
  delEsCluster:topic.dasTopic + "/web/esCluster/delEsCluster", //删除ES集群信息
  getEsCluster:topic.dasTopic + "/web/esCluster/getEsCluster", //获取ES集群信息
  updateEsCluster:topic.dasTopic + "/web/esCluster/updateEsCluster", //修改ES集群信息
  searchEsCluster:topic.dasTopic + "/web/esCluster/searchEsCluster", //获取ES集群信息集合
  listEsCluster:topic.dasTopic + "/web/esCluster/listEsCluster", //获取ES集群信息集合
  switchEsClusterById:topic.dasTopic + "/web/esCluster/switchEsClusterById", //切换ES集群状态

  // ES类型
  addEsType:topic.dasTopic + "/web/esestype/addEsType", //添加ES集群信息
  delEsType:topic.dasTopic + "/web/esestype/delEsType", //删除ES集群信息
  getEsType:topic.dasTopic + "/web/esestype/getEsType", //获取ES集群信息
  updateEsType:topic.dasTopic + "/web/esestype/updateEsType", //修改ES集群信息
  searchEsType:topic.dasTopic + "/web/esestype/searchEsType", //获取ES集群信息集合
  listEsType:topic.dasTopic + "/web/esestype/listEsType", //获取ES集群信息集合
  startEsType:topic.dasTopic + "/web/esestype/startEsType", //启用禁用
  switchEsTypeById:topic.dasTopic + "/web/esestype/switchEsTypeById", //切换状态

  // 数据中心报表
  statisticsOdsDataSource:topic.dasTopic + "/web/report/statisticsOdsDataSource", //按数据源统计的信息
  statisticsOdsTable:topic.dasTopic + "/web/report/statisticsOdsTable", //按数据库表统计的信息
  statisticsEs2Db:topic.dasTopic + "/web/report/statisticsEs2Db", //数据源类型
  statisticsEsCluster:topic.dasTopic + "/web/report/statisticsEsCluster", //es集群
  statisticsEsIndex2Type:topic.dasTopic + "/web/report/statisticsEsIndex2Type", //es集群索引

};