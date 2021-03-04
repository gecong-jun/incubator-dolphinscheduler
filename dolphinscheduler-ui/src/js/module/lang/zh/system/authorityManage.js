export default {
// 资源管理
business: {
    label: { // 列表/表单标题文字
        // 权限资源
        resCode:"资源编号",
        resName:"资源名称",
        resType: "资源类型",
        resModule: "所属系统模块",
        resOrder:"排序",
        resParent:"父级资源",
        buttonLink:"按钮链接",
        buttonIcon:"按钮图标",
        resChannel:"资源所属渠道",
        resOwnerModule:"资源所属模块",
        menu:"菜单",
        button:"按钮",
        interface:"接口",
        smallProgramMenu:"小程序菜单",
        smallProgramButton:"小程序按钮",
        pcOutLink:"pc端外部链接",
        pcInLink:"pc端内部链接",
        smallProgramOutLink:"小程序外部链接",
        linkType:"链接类型",
        linkAdress:"链接地址",
        iconPath:"图标路径",
    },
    button:{ // 按钮文字
        resetPassword:"重置密码",
        setRole:"分配角色",
        setPost:"分配岗位",
        setAuth:"分配权限",
    },
    title:{ // 弹出框标题
        addRes:"添加资源",
        editRes:"编辑资源",
        seeDetail:"查看详情",
        confirmDel:"确认删除【{resName}】",
        deleteElements:"删除元素",
        orderNum:"排序号不可大于127",
    },
    msg:{ // 提示信息
        /*验证提示信息，命名规范：功能名称_validate_字段名称_验证类型（required:非空验证、length:长度验证）*/
        authority_validate_menuCode_required:'请输入菜单编号',
        authority_validate_menuCode_length:'长度在 1 到 30 个字符',
        authority_validate_menuName_required:'请输入菜单名称',
        authority_validate_menuName_length:'长度在 1 到 30 个字符',
        authority_validate_sortNum_required:'请输入菜单排序号',
        authority_validate_channelType_required:'请选择资源所属渠道',
        authority_validate_resPath_required:'请输入资源路径（页面目录）',
        authority_validate_externalUrl_length:'长度在 1 到 500 个字符',
        authority_validate_externalIcon_length:'长度在 1 到 500 个字符',
    }
}
}