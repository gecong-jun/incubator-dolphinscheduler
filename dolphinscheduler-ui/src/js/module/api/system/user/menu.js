import topic from '@/cfg/topic';
import SRCB_O2LOGIN from '@/api/util/http';

import {FOLDER, MENU} from '@/cfg/resource';

const generateRoute = (menus, isRoot = false) => {
    let routes = [];

    menus.forEach((menu, index) => {
        let path = '';
        if (isRoot) {
            path += '/';
        }
        path += (menu.resCode) ? menu.resCode : menu.id;

        let route = {
            meta:{
                title:menu.resName,
                resName:menu.resName
            },
            sortNum:menu.sortNum,
            resType:menu.resType,
            path,
            name:menu.id,
            moduleEntry:menu.appId
        };

        if (menu.resExt) {
            route.resExt = JSON.parse(menu.resExt);
        }

        if (menu.children && menu.children.length > 0) {
            route.children = generateRoute(menu.children);
        }

        routes.push(route);
    });

    // routes.sort((a, b) => {
    //     return a.sortNum - b.sortNum;
    // });

    return routes;
};

export default class USER_MENU extends SRCB_O2LOGIN {
    constructor () {
        super(
            {
                url:topic.businessUserTopic + "/user/listWebUserMenuTree",
                method:'post'
            },
            {version:'2.0'}
        );
    }

    commit (params) {
        return new Promise((resolve, reject) => {
            super.commit(params).then((data) => {
                // if (data.length === 0) {
                //     reject({msg:"用户没有菜单权限，请检查用户是否有角色"});
                // } else {
                //     // let userContext = data.filter((res) => {
                //     //   return res.resType === FOLDER || res.resType === MENU;
                //     // });
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }

    // 生成路由
    generateRoute (menus) {
        return generateRoute(menus, true);
    }
};
