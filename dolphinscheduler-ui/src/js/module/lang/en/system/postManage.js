export default {
    // 岗位管理
    business: {
        label: { // 列表/表单标题文字
            positionCode:"Position Code",
            positionName:"Position Name",
            organisation:"Organisation",
            affiliation:"Affiliation",
            groupName:"Group Name",
            groupCode:"Group Code",
            disable:"Disable",
            yes:"Yes",
            no:"No",
        },
        title:{ // 弹出框标题
            setRole:"Set Role",
            setMechanism:"Set Agencies",
            addPosition:"Add Position",
            editPosition:"Edit Position",
            orgSetSuccess:"Organization set success",
            outhSetSuccess:"Outh set success",
            confirmDel:"Confirm that you want to delete the post【{positionName}】",
            selectRole:"Please select the role to assign",
        },
        button:{ // 按钮文字
            setAgencies:"Set agencies",
            setRole:"Set role",
            viewUser:"Display Users"
        },
        msg:{ // 提示信息
            /*验证提示信息，命名规范：功能名称_validate_字段名称_验证类型（required:非空验证、length:长度验证）*/
            position_validate_positionCode_required:'please enter a position code',
            position_validate_positionCode_length:'the position code is 1 to 32 characters in length',
            position_validate_positionName_required:'please enter a position name',
            position_validate_positionName_length:'the position name is 1 to 32 characters in length',
            position_validate_orgText_length:'please enter a organization',
        }
    }
}
