export default {
// 用户管理
business: {
    label: { // 列表/表单标题文字
        // 用户管理
        userCode: "用户账号",
        userName: "用户名",
        belongToOrg: "所属机构",
        position: "岗位",
        sex: "性别",
        tel: "电话",
        mobile: "手机号码",
        email: "邮箱",
        userType: "用户类型",
        // 角色
        roleName:"角色名称",
        roleCode:"角色编码",
        // 权限资源
        resCode:"资源编号",
        resName:"资源名称",
        attrKey: "属性键",
        attrName: "属性名称",
        tip:"提示：选择的第一个岗位为默认岗位",
        orgIds: '机构号',
        telephone: '座机号码',
    },
    button:{ // 按钮文字
        resetPassword:"重置密码",
        setRole:"分配角色",
        setPost:"分配岗位",
        setAuth:"分配权限",
        setUnlock:"解锁",
        joinUserGroups:"加入用户组",
    },
    title:{ // 弹出框标题
        addUser:"添加用户",
        editUser:"编辑用户",
        setRole:"分配角色",
        setPost:"分配岗位",
        optional_role:'可选角色',
        select_role:'已选角色',
        resetPassword:"重置密码",
        joinUserGroup:"加入用户组",
        userDetails:"用户详情",
        optionalUserGroup: '可选用户组',
        selectedUserGroup: '已选用户组',
    },
    // 输入框的提示语言
    placeholder: {
        selectPosition: "请选择岗位",
    },
    msg:{ // 提示信息
        /*验证提示信息，命名规范：功能名称_validate_字段名称_验证类型（required:非空验证、length:长度验证）*/
        user_validate_userCode_required:'请输入用户账号',
        user_validate_userCode_length:'用户账号长度为 1 到 32 个字符',
        user_validate_userName_required:'请输入用户名称',
        user_validate_positionId_required:'请选择岗位',
        user_validate_userName_length:'用户名称长度为 1 到 32 个字符',
        user_validate_mobile_required:'手机号码不能为空',
        user_validate_mobile_length:'请输入11位的手机号',
        user_validate_email_required:'邮箱不能为空',
        user_validate_orgId_required:'请选择所属机构',

        /* 操作提示 */
        user_confirm_resetPassword_cue:"确认要重置密码？",
        user_resetPassword_success:"重置密码成功",
        user_cancel_resetPassword:"已取消重置密码",
        user_setRole_success:"分配角色成功",
        user_setPost_success:"分配岗位成功",
        role_setAuth_success:"分配权限成功",
        user_confirm_unlock:"确定用该用户解锁吗？",
        user_unlock_success:"解锁成功",
        user_cancel_unlock:"已取消解锁",

        /*错误提示*/
        user_error_setRole:"请选择要分配的角色",
        user_error_addAcount:"输入的账号在银行系统不存在，不允许添加。",
        user_error_selectPosition:"所属机构必须选择!",
        user_error_choicePosition:"请选择岗位",
        user_error_joinUserGroup:"加入用户组成功",

        mobileMsg: "请输入正确的手机号码",
        emailMsg: '请输入正确格式的邮箱',
        noLockedAccount: "没有已锁定账户，无需解锁",
        telephoneMsg: "请输入正确的座机号",
        confirm_delete_cue:'确认要删除 '
    }
}
}
