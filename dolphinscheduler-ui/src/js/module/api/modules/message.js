import topic from './topic'

export const messageAPI = {

    queryTemps: topic.messageTopic + "/temp/queryTemps",//查询消息模板列表
    queryTempsNoPage: topic.messageTopic + "/temp/queryTempsNoPage",//查询消息模板列表
    queryTempById: topic.messageTopic + "/temp/queryTempById",//查询消息模板详细
    changeTempStatus: topic.messageTopic + "/temp/changeTempStatus",//查询消息模板详细
    addTemp: topic.messageTopic + "/temp/addTemp",//新增消息模板
    modifyTemp: topic.messageTopic + "/temp/modifyTemp",//编辑消息模板
    deleteTemp: topic.messageTopic + "/temp/deleteTemp",//删除消息模板
    upTempParms: topic.messageTopic + "/temp/upTempParms",//修改消息参数

    queryTempParamByPage: topic.messageTopic + "/temp/queryTempParamByPage",//编辑消息模板
    addTempParam: topic.messageTopic + "/temp/addTempParam",//编辑消息模板
    updateTempParam: topic.messageTopic + "/temp/updateTempParam",//编辑消息模板
    delTempParam: topic.messageTopic + "/temp/delTempParam",//编辑消息模板
    queryTempParamById: topic.messageTopic + "/temp/queryTempParamById",//编辑消息模板

    queryQueues: topic.messageTopic + "/queue/queryQueues",//查询消息投递历史列表
    delQueues: topic.messageTopic + "/queue/delQueues",//批量删除消息投递历史
    queryQueueById: topic.messageTopic + "/queue/queryQueueById",//查询消息投递历史详细

    queryMsgs: topic.messageTopic + "/msg/queryMsgs",//查询消息发送历史列表
    delMsgs: topic.messageTopic + "/msg/delMsgs",//批量删除消息发送历史
    queryMsgById: topic.messageTopic + "/msg/queryMsgById",//查询消息发送历史详细
    processMsgById: topic.messageTopic + "/msg/processMsgById",//手动发送消息


    delTempType: topic.messageTopic + "/tempType/deleteTempType",//删除模板类型
    addTempType: topic.messageTopic + "/tempType/addTempType",//添加消息模板类型
    modifyTempType: topic.messageTopic + "/tempType/modifyTempType",//修改消息模板类型
    changeTempTypeStatus: topic.messageTopic + "/tempType/changeTempTypeStatus",//停用消息模板类型
    queryTempTypesByPage: topic.messageTopic + "/tempType/queryTempTypesByPage",//分页查询消息模板类型列表
    queryTempTypes: topic.messageTopic + "/tempType/queryTempTypes",//查询消息类型
    queryTempTypeById: topic.messageTopic + "/tempType/queryTempTypeById",//查询消息模板类型详细

    /* 首页消息调用 */
    queryMsgByUser: topic.messageTopic + "/msg/queryMsgByUser",// 查询消息发送历史
    queryMsgCountByUser: topic.messageTopic + "/msg/queryMsgCountByUser",//查询消息发送历史数量
    changeMsgById: topic.messageTopic + "/msg/changeMsgById",//修改消息为已读状态

    /* 消息策略*/
    queryStrategys: topic.messageTopic + "/temp/queryStrategys",//查询消息策略
    queryStrategyConfigs: topic.messageTopic + "/temp/queryStrategyConfigs",//查询消息策略配置

};