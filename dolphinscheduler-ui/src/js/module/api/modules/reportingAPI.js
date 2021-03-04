import topic from './topic'

export const reportingAPI = {
    /*
    * 格式
    * key:topic.topic名称+"接口地址"
    * 如：queryFodderType: topic.mediaManagerTopic + "/fodderType/queryFodderTypeList", // 查询素材分类
    * */

    getReport: topic.reportingTopic + "/manage-reporting/view/getReport",// 查询报表
    exportReport: topic.reportingTopic + "/manage-reporting/download/exportReport",// 导出报表


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    getBusinessAnalysis: topic.reportingTopic + "/queueReport/getBusinessAnalysis",// 查询报表-业务量分析
    getBusinessWaitTime: topic.reportingTopic + "/queueReport/getBusinessWaitTime",// 查询报表-业务等待时间
    getBusinessSubscribe: topic.reportingTopic + "/queueReport/getBusinessSubscribe",// 查询报表-预约占比
    getBusinessTraffic: topic.reportingTopic + "/queueReport/getBusinessTraffic",// 查询报表-业务流量分析
    getCustomerTraffic: topic.reportingTopic + "/queueReport/getCustomerTraffic",// 查询报表-客户流量分析
    getCustomerExperience: topic.reportingTopic + "/queueReport/getCustomerExperience",// 查询报表-客户体验分析
    getTellerEfficeencyBus: topic.reportingTopic + "/queueReport/getTellerEfficeencyBus",// 查询报表-柜员业务效率分析
    getTellerEvaluation: topic.reportingTopic + "/queueReport/getTellerEvaluation",// 查询报表-柜员服务评价

    exportBusinessAnalysis: topic.reportingTopic + "/queueReport/exportBusinessAnalysis",// 导出报表-业务量分析
    exportBusinessWaitTime: topic.reportingTopic + "/queueReport/exportBusinessWaitTime",// 导出报表-业务等待时间
    exportBusinessSubscribe: topic.reportingTopic + "/queueReport/exportBusinessSubscribe",// 导出报表-预约占比
    exportBusinessTraffic: topic.reportingTopic + "/queueReport/exportBusinessTraffic",// 导出报表-业务流量分析
    exportCustomerTraffic: topic.reportingTopic + "/queueReport/exportCustomerTraffic",// 导出报表-客户流量分析
    exportCustomerExperience: topic.reportingTopic + "/queueReport/exportCustomerExperience",// 导出报表-客户体验分析
    exportTellerEfficeencyBus: topic.reportingTopic + "/queueReport/exportTellerEfficeencyBus",// 导出报表-柜员业务效率分析
    exportTellerEvaluation: topic.reportingTopic + "/queueReport/exportTellerEvaluation",// 导出报表-柜员服务评价

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    getDeviceOpenRate: topic.reportingTopic + "/assetReport/getDeviceOpenRate",// 查询报表-设备开机率
    getMaintenanceAll: topic.reportingTopic + "/assetReport/getMaintenanceAll",// 查询报表-维保工作情况总表
    getMaintenanceDay: topic.reportingTopic + "/assetReport/getMaintenanceDay",// 查询报表-维保工作情况日报
    getMaintenanceWeek: topic.reportingTopic + "/assetReport/getMaintenanceWeek",// 查询报表-维保工作情况周报
    getMaintenanceMonth: topic.reportingTopic + "/assetReport/getMaintenanceMonth",// 查询报表-维保工作情况月报
    getMaintenanceQuarter: topic.reportingTopic + "/assetReport/getMaintenanceQuarter",// 查询报表-维保工作情况-季报

    exportDeviceOpenRate: topic.reportingTopic + "/assetReport/exportDeviceOpenRate",// 导出报表-设备开机率
    exportMaintenanceAll: topic.reportingTopic + "/assetReport/exportMaintenanceAll",// 导出报表-维保工作情况总表,
    exportMaintenanceDay: topic.reportingTopic + "/assetReport/exportMaintenanceDay",// 导出报表-维保工作情况日报
    exportMaintenanceWeek: topic.reportingTopic + "/assetReport/exportMaintenanceWeek",// 导出报表-维保工作情况周报
    exportMaintenanceMonth: topic.reportingTopic + "/assetReport/exportMaintenanceMonth",// 导出报表-维保工作情况月报
    exportMaintenanceQuarter: topic.reportingTopic + "/assetReport/exportMaintenanceQuarter",// 导出报表-维保工作情况-季报

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
