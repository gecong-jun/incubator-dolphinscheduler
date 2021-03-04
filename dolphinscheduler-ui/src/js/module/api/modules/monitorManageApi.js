import topic from "./topic";

export const monitorManageApi = {
    getTransMonitor: topic.manageBcip + "/transMonitor/getTransMonitor2", // 获取交易监控数据
    getTransHis: topic.manageBcip + "/transMonitor/getTransHis2",

    downTransBlack: topic.manageBcip + "/transBlack/downTemplate", // 导入模板下载
    addTransBlack: topic.manageBcip + "/transBlack/addTransBlack",
    importTransBlack: topic.manageBcip + "/transBlack/importTransBlack",
    getTransBlack: topic.manageBcip + "/transBlack/getTransBlack",
    deleteTransBlack: topic.manageBcip + "/transBlack/deleteTransBlack",
};