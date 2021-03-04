import topic from './topic'
export default {
    // getPositionList: topic.personTopic + "/position/getPositonList",//查询岗位列表
    getPositionList: topic.personTopic + "/person/get",//查询岗位列表
    updateAssetInfo: topic.assetTopic + "/asset-physical/updateAssetInfo",//更新资产   //
    delAssetInfo: topic.assetTopic + "/asset-physical/delAssetInfo",//删除资产   //
    getAssetInfo: topic.assetTopic + "/asset-physical/getAssetInfo",//条件查询资产   //
    getAssetInfoByCode: topic.assetTopic + "/asset-physical/getAssetInfoByCode",//根据资产编号查询资产  //
    getAssetInfoById: topic.assetTopic + "/asset-physical/getAssetInfoById",//根据资产唯一ID查询资产  //
    getUnScrapAsset: topic.assetTopic + "/asset-physical/getUnScrapAsset",//根据资产唯一ID查询资产  //
    getAttrChangeAsset: topic.assetTopic + "/asset-physical/getAttrChangeAsset",//根据资产唯一ID查询资产  //
}