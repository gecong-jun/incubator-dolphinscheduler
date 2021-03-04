const topic = {
  authTopic: "/platform-auth", // 权限服务
  oldBusinessUserTopic: "/platform-basic",
  businessUserTopic: "/platform-basic", // 系统基础服务
  businessUserTopicNew: "platform-basic3",
  fileTopic: "/platform-file", // 文件服务

  // 原子工程服务
  demoTopic: "/platform-basic", // business服务
  workorderTopic: "/manage-workorder", // business服务
  operaTopic: "/manage-opera", // opera服务
  impexpTopic: "/manage-impexp", // 导入导出服务
  physicalTopic: "/manage-asset", // 资产服务
  maintenanceTopic: "/asset-maintenance", // 维保服务费用
  communicationTopic: "/manage-communication", // 交流中心服务
  messageTopic: "/message-center", //消息中心
  deviceTopic: "/manage-asset", //终端服务
  assetManageTopic: "/manage-asset", //资产管理
  assetTopic: "/manage-asset", // 资产属性
  dasTopic: "/das-web", //数据中心
  schedulingTopic: "/manage-schedual", //排班
  mediaTopic: "/manage-media", //多媒体发布
  monitorTopic: "/monitor-web", //预警中心
  issuedTopic: "/manage-issued", //资产申请
  reportingTopic: "/manage-reporting", // 报表管理
  mediaScreenTopic: "/manage-queue-bank", // 媒体大屏管理
  windowTopic: "/manage-queue-bank", // 窗口管理
  manageBcip: "/manage-bcip",//渠道平台
  customTopic: "/manage-custom", //审批中心
  manageQueue: "/manage-queue-bank",//排队机
  safetyTopic: "/manage-safety",//可信安全
  bwcTopic: "/manage-bwc",//业务预警中心
  personTopic: "/manage-person",//人员管理
  workflowTopic: "/manage-workflow", //工作流
  manageDaily0perateTopic: "/manage-daily-operate",//公告
  managePerformance: "/manage-performance",// 绩效考核
  manageExpansion: "/manage-expansion",//扩展系统服务
  manageOrgTopic:"/manage-org",//组织机构
  performance: "/manage-performance",
  manageOperateElement:"/manage-operate-element", //运营要素
  satisfactionTopic: "/manage-satisfaction",//满意度调查
  platformLog: "/platform-log",
  knowTopic: "/manage-know",//知识库管理
  jobTopic: "/manage-job",
}

export default topic;
