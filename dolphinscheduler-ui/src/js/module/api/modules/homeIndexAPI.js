import topic from './topic' // 导入定义的后台服务
export const homeIndexAPI = {
    // 设备状态
    getTermStateCount: topic.assetTopic + "/asset-monitor/getTermStateCount", //获取所有设备状态统计信息
    // 各自助机具占比
    getAssetNameNum: topic.assetTopic + "/asset-physical/getAssetNameNum", // 获取自助机具数量
    // 近7日交易量
    queryTranCount7Days: topic.assetTopic + "/trade-srcb/queryTranCount7Days", // 查询近七天交易量
    // 近7日工单数量
    staticDays: topic.workorderTopic + "/workorder/statics/staticDays", // 工单统计数据
    // 故障工单设备类型TOPO10
    staticNumByAssetType: topic.workorderTopic + "/workorder/statics/staticNumByAssetType", // 按照设备统计数量
    //
    staticsTask: topic.operaTopic + "/library/operalibrarytask/statics/staticsTask",// 获取盘库统计数据的接口

    setUserQuickSettngs: topic.businessUserTopic + "/user/setUserQuickSettngs",// 保存首页配置
    getUserQuickSettngs: topic.businessUserTopic + "/user/getUserQuickSettngs",//查询首页配置
}