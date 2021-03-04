export default {
// 角色管理
business: {
    label: { // 列表/表单标题文字
        // 角色
        roleName:"角色名称",
        roleCode:"角色编码",
        // 权限资源
        resCode:"资源编号",
        resName:"资源名称",
        attrKey: "属性键",
        attrName: "属性名称",
        roleDetails: "角色详情",
        setRoleAuth: "分配权限",
    },
    button:{ // 按钮文字
        resetPassword:"重置密码",
        setRole:"分配角色",
        setPost:"分配岗位",
        setAuth:"分配权限",
    },
    title:{ // 弹出框标题
        setRole:"分配角色",
        setPost:"分配岗位",
        optional_role:'可选角色',
        select_role:'已选角色',
        resetPassword:"重置密码",
        setAuth:"分配权限",
        addRole:"添加角色",
        editRole:"编辑角色",
        tip:"提示：勾选节点复选框，可全选或反选所有子节点；点击节点名称，选中/反选当前节点和反选所有子节点。"
    },
    // 输入框的提示语言
    placeholder: {
        selected: "请选择",
    },
    msg:{ // 提示信息
        /*验证提示信息，命名规范：功能名称_validate_字段名称_验证类型（required:非空验证、length:长度验证）*/
        role_validate_roleName_required:'请输入角色名称',
        role_validate_roleName_length:'角色名称长度为 1 到 32 个字符',
        role_validate_roleCode_required:'请输入角色编码',
        role_validate_roleCode_length:'角色编码长度为 1 到 32 个字符',

        /* 操作提示 */
        role_setAuth_success:"分配权限成功",

        /*错误提示*/
        user_error_setRole:"请选择要分配的角色",

        del_role_cue:"确认要删除此角色",
        del_role_suffix:"删除后关联的资源将全部删除!",
    }
}
}
