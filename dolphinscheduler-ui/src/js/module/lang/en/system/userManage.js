export default {
// 用户管理
business: {
        label: { // 列表/表单标题文字
            // 用户管理
            userCode: "User Code",
            userName: "User Name",
            belongToOrg: "Belong to Organization",
            position: "Position",
            sex: "Sex",
            tel: "Telephone",
            mobile: "Mobile",
            email: "Email",
            userType: "User Type",
            // 角色
            roleName:"Role Name",
            roleCode:"Role Code",
            // 权限资源
            resCode:"Resource Code",
            resName:"Resource Name",
            attrKey: "Attribute Key",
            attrName: "Attribute Name",
            tip:"tip: The first position selected is the default position",
            orgIds: 'Organization ID',
            telephone: 'Telephone',
        },
        button:{ // 按钮文字
            resetPassword:"Reset password",
            setRole:"Set role",
            setPost:"Set position",
            setAuth:"Set auth",
            setUnlock:"Unlock",
            joinUserGroups:"Join user groups",
        },
        title:{ // 弹出框标题
            addUser:"Add User",
            editUser:"Edit User",
            setRole:"Set Role",
            setPost:"Set Position",
            optional_role:"Optional Role",
            select_role:"Select Role",
            resetPassword:"Reset Password",
            joinUserGroup:"Join User Group",
            userDetails:"User Details",
            optionalUserGroup: 'Optional User Group',
            selectedUserGroup: 'Selected User Group',
        },
        // 输入框的提示语言
        placeholder: {
            selectPosition: "please select position",
        },
        msg:{ // 提示信息
            /*验证提示信息，命名规范：功能名称_validate_字段名称_验证类型（required:非空验证、length:长度验证）*/
            user_validate_userCode_required:'please enter the user account',
            user_validate_userCode_length:'user accounts are between 1 and 32 characters in length',
            user_validate_userName_required:'please enter the user name',
            user_validate_positionId_required:'please select position',
            user_validate_userName_length:'The user name is 1 to 32 characters in length',
            user_validate_mobile_required:'please enter the user cell phone number',
            user_validate_mobile_length:'please enter your 11-digit cell phone number',
            user_validate_email_required:'please enter the user email',
            user_validate_orgId_required:'please select your organization',

            /* 操作提示 */
            user_confirm_resetPassword_cue:"are you sure to reset your password?",
            user_resetPassword_success:"password reset successfully",
            user_cancel_resetPassword:"reset password has been cancelled",
            user_setRole_success:"role assignment success",
            user_setPost_success:"successful post assignment",
            role_setAuth_success:"permissions are assigned successfully",
            user_confirm_unlock:"are you sure to unlock?",
            user_unlock_success:"unlock successfully",
            user_cancel_unlock:"unlock has been cancelled",

            /*错误提示*/
            user_error_setRole:"please select the role to assign",
            user_error_addAcount:"The entered account does not exist in the banking system and is not allowed to be added.",
            user_error_selectPosition:"The organization must choose!",
            user_error_choicePosition:"please select position",
            user_error_joinUserGroup:"join user group",

            mobileMsg: "Please input correct phone number",
            emailMsg: 'Please input correct email address',
            noLockedAccount: "No locked account, no need to unlock",
            telephoneMsg: "Please input correct telephone",
            confirm_delete_cue:'Confirm to delete ',
        }
}
}
