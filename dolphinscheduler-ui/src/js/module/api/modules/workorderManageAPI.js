import topic from './topic'
export const workorderManageAPI = {
    /* 服务商 */
    addSupplierInfo: topic.workorderTopic + "/supplier/addSupplierInfo",//添加服务商信息
    delSupplierInfo: topic.workorderTopic + "/supplier/delSupplierInfo",//删除服务商信息
    getSupplierInfo: topic.workorderTopic + "/supplier/getSupplierInfo",//获取服务商信息
    updateSupplierInfo: topic.workorderTopic + "/supplier/updateSupplierInfo",//修改服务商信息
    listSupplierInfo: topic.workorderTopic + "/supplier/listSupplierInfo",//获取服务商List信息
    querySupplierInfoPage: topic.workorderTopic + "/supplier/querySupplierInfoPage",//获取服务商分页信息
    querySupplierInfoRelation: topic.workorderTopic + "/supplier/querySupplierInfoRelation",//获取服务商是否存在服务站，服务人员


    /* 服务站 */
    addWorkorderStation: topic.workorderTopic + "/station/addWorkorderStation",//添加服务站 信息
    delWorkorderStation: topic.workorderTopic + "/station/delWorkorderStation",//删除服务站 信息
    getWorkorderStation: topic.workorderTopic + "/station/getWorkorderStation",//获取服务站 信息
    updateWorkorderStation: topic.workorderTopic + "/station/updateWorkorderStation",//修改服务站 信息
    listWorkorderStation: topic.workorderTopic + "/station/listWorkorderStation",//获取服务站List信息
    queryWorkorderStationPage: topic.workorderTopic + "/station/queryWorkorderStationPage",//获取服务站 分页信息
    workorderUserSetRole: topic.workorderTopic + "/station/workorderUserSetRole",//设置服务站 主管及工程师


    /* 服务人员 */
    addWorkorderUser: topic.workorderTopic + "/workorderuser/addWorkorderUser",//添加服务人员 信息
    delWorkorderUser: topic.workorderTopic + "/workorderuser/delWorkorderUser",//删除服务人员 信息
    getWorkorderUser: topic.workorderTopic + "/workorderuser/getWorkorderUser",//获取服务人员 信息
    getWorkorderUserByUserId: topic.workorderTopic + "/workorderuser/getWorkorderUserByUserId",//获取服务人员 信息
    updateWorkorderUser: topic.workorderTopic + "/workorderuser/updateWorkorderUser",//修改服务人员 信息
    listWorkorderUser: topic.workorderTopic + "/workorderuser/listWorkorderUser",//获取服务人员 List信息
    queryWorkorderUserPage: topic.workorderTopic + "/workorderuser/queryWorkorderUserPage",//获取服务人员 分页信息
    aduitWorkorderUser: topic.workorderTopic + "/workorderuser/aduitWorkorderUser",//服务人员审批信息
    workorderUserUnqiue: topic.workorderTopic + "/workorderuser/workorderUserUnqiue",//服务人员信息验证
    listWorkOrderStationUser: topic.workorderTopic + "/workorderuser/listWorkOrderStationUser",//服务人员已选待选信息列表
    workuserCancel: topic.workorderTopic + "/workorderuser/workuserCancel",//工程师角色是否可以取消
    queryStationTake: topic.workorderTopic + "/workorderuser/queryStationTake",//获取服务站下主管信息
    activeStationTake: topic.workorderTopic + "/workorderuser/activeStationTake",//激活站点主管
    workUserChange: topic.workorderTopic + "/workorderuser/workUserChange",//修改行外人员用户账号

    /*服务参数*/
    addSupplierInfoTime: topic.workorderTopic + "/supplierTime/addSupplierInfoTime",//添加服务商服务参数 信息
    delSupplierInfoTime: topic.workorderTopic + "/supplierTime/delSupplierInfoTime",//删除服务商服务参数 信息
    getSupplierInfoTime: topic.workorderTopic + "/supplierTime/getSupplierInfoTime",//获取服务商服务参数 信息
    updateSupplierInfoTime: topic.workorderTopic + "/supplierTime/updateSupplierInfoTime",//修改服务商服务参数 信息
    listSupplierInfoTime: topic.workorderTopic + "/supplierTime/listSupplierInfoTime",//获取服务商服务参数 List信息
    querySupplierInfoTimePage: topic.workorderTopic + "/supplierTime/querySupplierInfoTimePage",//获取服务商服务参数 分页信息



    /* 工单基本信息*/
    addWorkorderInfo:topic.workorderTopic + "/workorderInfo/addWorkorderInfo",//新建工单
    updateWorkorderInfo:topic.workorderTopic + "/workorderInfo/updateWorkorderInfo",//修改工单
    queryWorkorderInfoPage:topic.workorderTopic + "/workorderInfo/queryWorkorderInfoPage",//获取工单分页信息
    getWorkorderInfo:topic.workorderTopic + "/workorderInfo/getWorkorderInfo",//获取工单信息
    queryProcessedWorkorderInfoPage:topic.workorderTopic + "/workorderInfo/queryWorkorderInfoPage",
    showFlowChart: topic.workorderTopic + "/workorderInfo/showFlow", //查看流程图

    /* 工单流转操作*/
    retrieveWorkorderInfo:topic.workorderTopic + "/workorderStateFlow/retrieveWorkorderInfo",//取回工单
    cancelWorkorderInfo:topic.workorderTopic + "/workorderStateFlow/cancelWorkorderInfo",//撤销工单
    evaluationWorkorderInfo:topic.workorderTopic + "/workorderStateFlow/evaluationWorkorderInfo",//评价工单
    verifyWorkorderInfo:topic.workorderTopic + "/workorderStateFlow/verifyWorkorderInfo",//核实工单
};
