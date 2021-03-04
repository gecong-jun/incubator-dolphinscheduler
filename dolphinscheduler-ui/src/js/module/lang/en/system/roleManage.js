export default {
// 角色管理
business: {
        label: { // 列表/表单标题文字
            // 角色
            roleName:"Role Name",
            roleCode:"Role Code",
            // 权限资源
            resCode:"Resource Code",
            resName:"Resource Name",
            attrKey: "Attribute Key",
            attrName: "Attribute Name",
            roleDetails: "Role Details",
            setRoleAuth: "Set Auth",
        },
        button:{ // 按钮文字
            resetPassword:"reset password",
            setRole:"Set role",
            setPost:"set position",
            setAuth:"Set auth",
        },
        title:{ // 弹出框标题
            setRole:"Set Role",
            setPost:"Set Position",
            optional_role:'Optional Role',
            select_role:'Select Role',
            resetPassword:"Reset Password",
            setAuth:"Set Auth",
            addRole:"Add Role",
            editRole:"Edit Role",
            tip:"Tip: Check the node check box to select all or unselect all child nodes; Click the node name, select/deselect the current node and deselect all child nodes."
        },
        // 输入框的提示语言
        placeholder: {
            selected: "please select",
        },
        msg:{ // 提示信息
            /*验证提示信息，命名规范：功能名称_validate_字段名称_验证类型（required:非空验证、length:长度验证）*/
            role_validate_roleName_required:'please enter a role name',
            role_validate_roleName_length:'the role name is 1 to 32 characters in length',
            role_validate_roleCode_required:'please enter the role code',
            role_validate_roleCode_length:'the character encoding length is 1 to 32 characters',

            /* 操作提示 */
            role_setAuth_success:"permissions are assigned successfully",

            /*错误提示*/
            user_error_setRole:"please select the role to assign",

            del_role_cue:"Confirm that you want to delete this role",
            del_role_suffix:"All associated resources will be deleted after deletion!",
        }
}
}
