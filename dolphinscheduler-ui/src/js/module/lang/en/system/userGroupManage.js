export default {
    // 用户组管理
    business: {
        label: { // 列表/表单标题文字
            groupCode:"Group Code",
            groupName:"Group Name",
            setAdministrator:"Set Administrator",
        },
        title:{ // 弹出框标题
            setRole:"Set Role",
            setUser:"Set User",
            groupAssignment:"Group Assignment",
            addGroup:"Add Group",
            editGroup:"Edit Group",
        },
        // 输入框的提示语言
        placeholder: {
            transferUser:"transfer user",
        },
        button:{ // 按钮文字
            manageUser:"Manage user",
            setRole:"Set role",
            groupAssignment:"Group assignment",
            assignMembersRole:"Assign members role",
            addMember:"Add member",
            delMember:"Delete member",
            auth:"Authority"
        },
        msg:{ // 提示信息
            /*验证提示信息，命名规范：功能名称_validate_字段名称_验证类型（required:非空验证、length:长度验证）*/
            group_validate_groupCode_required:'please enter a group code',
            group_validate_groupCode_length:'the group code is 1 to 20 characters in length',
            group_validate_groupName_required:'please enter a group name',
            group_validate_groupName_length:'the group name is 1 to 30 characters in length',
            group_exists_users: "Can not delete because exists users in user group",
        }
    }
}
