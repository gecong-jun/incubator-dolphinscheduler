import topic from './topic'
export const parameterManageAPI = {
    /* 字典管理 */
    addDictItem: topic.manageConfigTopic + "/dict/addDictItem", //添加字典条例
    addDictType: topic.manageConfigTopic + "/dict/addDictType", //添加字典类型
    delDictItem: topic.manageConfigTopic + "/dict/delDictItem", //删除字典条例
    delDictType: topic.manageConfigTopic + "/dict/delDictType", //删除字典类型
    queryDictItemPage: topic.manageConfigTopic + "/dict/queryDictItemPage", //分页查询字典条例
    queryDictTypePage: topic.manageConfigTopic + "/dict/queryDictTypePage", //分页查询字典类型
    upDictItem: topic.manageConfigTopic + "/dict/upDictItem", //修改字典条例
    upDictType: topic.manageConfigTopic + "/dict/upDictType", //修改字典类型

    /* 运行参数设置 */
    addSysParam: topic.manageConfigTopic + "/sysParam/addSysParam", // 添加系统运行参数
    delSysParam: topic.manageConfigTopic + "/sysParam/delSysParam", // 删除系统运行参数
    querySysParamPage: topic.manageConfigTopic + "/sysParam/querySysParamPage", // 分页系统运行参数
    upSysParam: topic.manageConfigTopic + "/sysParam/upSysParam", // 修改系统运行参数

    /* 资产信息*/
    queryAsset: topic.manageConfigTopic + "/asset/queryAssetBaseInfoPage", //查询资产
    addAsset: topic.manageConfigTopic + "/asset/addAssetBaseInfo", //添加资产
    upAsset: topic.manageConfigTopic + "/asset/upAssetBaseInfo", //修改资产
    delAsset: topic.manageConfigTopic + "/asset/delAssetBaseInfo", //删除资产
};
