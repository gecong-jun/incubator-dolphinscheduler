import topic from './topic'
/* 排班服务相关接口 */
export const schedulingAPI = {

    addFeastDay: topic.schedulingTopic + "/web/feastDay/addFeastDay", //添加节假日
    delFeastDay: topic.schedulingTopic + "/web/feastDay/delFeastDay", //删除节假日
    getFeastDay: topic.schedulingTopic + "/web/feastDay/getFeastDay", //获取节假日
    listFeastDay: topic.schedulingTopic + "/web/feastDay/listFeastDay", //获取节假日集合
    queryFeastDay: topic.schedulingTopic + "/web/feastDay/queryFeastDay", //查询自己及以上机构节假日信息
    searchFeastDay: topic.schedulingTopic + "/web/feastDay/searchFeastDay", //获取节假日集合
    updateFeastDay: topic.schedulingTopic + "/web/feastDay/updateFeastDay", //修改节假日

    addFeastDayType: topic.schedulingTopic + "/web/feastDayType/addFeastDayType", //添加节假日类型
    updateFeastDayType: topic.schedulingTopic + "/web/feastDayType/updateFeastDayType", //修改节假日类型
    listFeastDayType: topic.schedulingTopic + "/web/feastDayType/listFeastDayType", //获取节假日类型
    searchFeastDayType: topic.schedulingTopic + "/web/feastDayType/searchFeastDayType", //获取节假日类型

    addPlan: topic.schedulingTopic + "/web/plan/addPlan",//添加营业计划
    delPlan: topic.schedulingTopic + "/web/plan/delPlan",//删除营业计划
    getPlan: topic.schedulingTopic + "/web/plan/getPlan",//获取营业计划
    listPlan: topic.schedulingTopic + "/web/plan/listPlan",//获取营业计划集合
    updatePlan: topic.schedulingTopic + "/web/plan/updatePlan",//修改营业计划
    saveDayRule: topic.schedulingTopic + "/web/plan/saveDayRule",//保存日规则

    getCalendar: topic.schedulingTopic + "/web/calendar/getCalendar",//  获取日历数据

};
