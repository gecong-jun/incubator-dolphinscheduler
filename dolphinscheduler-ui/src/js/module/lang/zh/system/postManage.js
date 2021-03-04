export default {
// 岗位管理
business: {
    label: { // 列表/表单标题文字
        positionCode:"岗位编号",
        positionName:"岗位名称",
        organisation:"所属组织",
        affiliation:"所属机构",
        groupName:"用户组名称",
        groupCode:"用户组编号",
        disable:"是否启用",
        yes:"是",
        no:"否",
    },
    title:{ // 弹出框标题
        setRole:"分配角色",
        setMechanism:"岗位设置机构",
        addPosition:"添加岗位",
        editPosition:"编辑岗位",
        orgSetSuccess:"岗位设置机构成功",
        outhSetSuccess:"设置权限成功",
        confirmDel:"确认要删除岗位【{positionName}】",
        selectRole:"请选择要分配的角色",
    },
    button:{ // 按钮文字
        setAgencies:"设置机构",
        setRole:"分配角色",
        viewUser:"查看用户"
    },
    msg:{ // 提示信息
        /*验证提示信息，命名规范：功能名称_validate_字段名称_验证类型（required:非空验证、length:长度验证）*/
        position_validate_positionCode_required:'请输入岗位编号',
        position_validate_positionCode_length:'长度在 1 到 32 个字符',
        position_validate_positionName_required:'请输入岗位名称',
        position_validate_positionName_length:'长度在 1 到 32 个字符',
        position_validate_orgText_length:'请选择所属机构',
    }
}
}
