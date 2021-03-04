import topic from '../../../cfg/topic';
import SRCB_O2LOGIN from '../../../api/util/http';
import {BUTTON} from "../../../cfg/resource";
// import {FRAME_MODULE} from "@/cfg/home/workPlatform";

export default class AUTH_LIST_RESOURCE extends SRCB_O2LOGIN {
    constructor () {
        super(
            {
                url: topic.businessUserTopic + "/resource/listWebResByUser",
                method: 'post'
            },
            {version: '2.0'}
        );
    }

    // 获取系统外围框架资源定义集合
    async getUserResourceAuth () {
        return new Promise((resolve, reject) => {
            super.commit({        
            }).then((data) => {
                resolve(data);
            }).catch((e) => {
                reject(e);
            });    
        });    
    }

    // 获取当前用户的所有按钮权限
    async getUserButtonAuth () {
        return new Promise((resolve, reject) => {
            super.commit({
                resType:BUTTON    
            }).then((data) => {
                resolve(data);
            }).catch((e) => {
                reject(e);
            });    
        });
    }
}
