export default {
// 用户组管理
business: {
    label: { // 列表/表单标题文字
        groupCode:"用户组编号",
        groupName:"用户组名称",
        setAdministrator:"组管理员",
    },
    title:{ // 弹出框标题
        setRole:"分配角色",
        setUser:"分配用户",
        groupAssignment:"组转让",
        addGroup:"添加用户组",
        editGroup:"编辑用户组",
    },
    // 输入框的提示语言
    placeholder: {
        transferUser:"请选择要转让的用户",
    },
    button:{ // 按钮文字
        manageUser:"管理用户",
        setRole:"分配角色",
        groupAssignment:"组转让",
        assignMembersRole:"分配组员权限",
        addMember:"添加组员",
        delMember:"删除组员",
        auth:"权限",
    },
    msg:{ // 提示信息
        /*验证提示信息，命名规范：功能名称_validate_字段名称_验证类型（required:非空验证、length:长度验证）*/
        group_validate_groupCode_required:'请输入用户组编号',
        group_validate_groupCode_length:'长度在 1 到 20 个字符',
        group_validate_groupName_required:'请输入用户组名称',
        group_validate_groupName_length:'长度在 1 到 30 个字符',
        group_exists_users: "组内已存在用户，不能删除",
    }
}
}
