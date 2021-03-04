import topic from './topic' // 导入定义的后台服务
export const safetyAPI = {
    addVersion: topic.safetyTopic + "/safety/addVersion", //添加资源上传
    updateVersion: topic.safetyTopic + "/safety/updateVersion", //修改资源上传
    delVersion: topic.safetyTopic + "/safety/delVersion", //删除资源上传

    searchDeviceOperateLog:topic.safetyTopic + "/device/deviceOperateLog/searchDeviceOperateLog", //获取终端操作日志集合
    exportDeviceOperateLog:topic.safetyTopic + "/device/deviceOperateLog/exportDeviceOperateLog", //获取终端操作日志集合
    searchDeviceWhiteInfo:topic.safetyTopic + "/device/deviceWhiteInfo/searchDeviceWhiteInfo", //获取设备应用白名单信息集合
    searchDeviceUsbWhiteInfo:topic.safetyTopic + "/device/deviceUsbWhiteInfo/searchDeviceUsbWhiteInfo", //获取设备USB白名称信息集合
    addDeviceUsbWhiteInfo:topic.safetyTopic + "/device/deviceUsbWhiteInfo/addDeviceUsbWhiteInfo", //添加设备USB白名称信息
    getDeviceUsbWhiteInfo:topic.safetyTopic + "/device/deviceUsbWhiteInfo/getDeviceUsbWhiteInfo", //获取设备USB白名称信息信息
    updateDeviceUsbWhiteInfo:topic.safetyTopic + "/device/deviceUsbWhiteInfo/updateDeviceUsbWhiteInfo", //修改设备USB白名称信息信息
    listDeviceUsbWhiteInfo:topic.safetyTopic + "/device/deviceUsbWhiteInfo/listDeviceUsbWhiteInfo", //获取设备USB白名称信息集合
    delDeviceUsbWhiteInfo:topic.safetyTopic + "/device/deviceUsbWhiteInfo/delDeviceUsbWhiteInfo", //删除设备USB白名称信息

    listUsbWhiteInfo:topic.safetyTopic + "/usb/usbWhiteInfo/listUsbWhiteInfo", //获取USB白名单信息集合
    listResourceContentInfo:topic.safetyTopic + "/resourceContentInfo/listResourceContentInfo", //获取资源文件内容集合
    searchResourceContentInfo:topic.safetyTopic + "/resourceContentInfo/searchResourceContentInfo", //获取资源文件内容集合分页


}