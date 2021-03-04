import topic from './topic' // 导入定义的后台服务
export const demoManageAPI = {
    /*
        * 格式
        * key:topic.topic名称+"接口地址"
        * 如：queryFodderType: topic.mediaManagerTopic + "/fodderType/queryFodderTypeList", //查询素材分类
        * */
    /* 用户 */
    addUser: topic.demoTopic + "/user/addUser",//添加用户信息   //
    delUser: topic.demoTopic + "/user/delUser",//删除用户信息   //
    getUser: topic.demoTopic + "/user/getUser",//获取用户信息   //
    searchUser: topic.demoTopic + "/user/searchUser",//获取用户信息集合   //
    updateUser: topic.demoTopic + "/user/updateUser",//修改用户信息  //

    listOrg: topic.demoTopic + "/org/listOrg",//获取组织信息集合  //
    listPosition: topic.demoTopic + "/position/listPosition",//获取岗位信息集合   //

    searchGroup: topic.demoTopic + "/group/searchGroup",//获取岗位信息集合   //
    searchWebGroup: topic.demoTopic + "/group/searchWebGroup",//获取岗位信息集合   //
    searchPosition: topic.demoTopic + "/position/searchPosition",//获取岗位信息集合   //

};
