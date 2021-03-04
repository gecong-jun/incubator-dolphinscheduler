export default {
// 菜单管理
business: {
    label: { // 列表/表单标题文字
        pc:"PC端",
        smallProgram:"小程序",
        tip:"提示：可点击鼠标拖动菜单节点改变菜单层级结构",
        menuName:"菜单名称",
        parentMenu:"父级菜单",
        order:"排序",
        menuChannel:"菜单所属渠道",
        template:"模板标识",
        resI18n:"国际化Key",
        show:"是否展示",
        yes:"是",
        no:"否",
    },
    title:{ // 弹出框标题
        addMenu:"添加菜单",
        editMenu:"编辑菜单",
        sortNum:"排序号不可大于127",
        showMenu:"显示菜单",
        confirmShow:"确认要显示【{resName}】吗？显示后菜单中可见",
        confirmHide:"确认要隐藏【{resName}】吗？隐藏后菜单中不可见",
        confirmDel:"确认要删除【{resName}】吗？",
        levelModifiedFail:"层级修改失败",
        levelModifiedSuccess:"层级修改成功",
    },
    button:{ // 按钮文字
        hide:"隐藏",
        show:"显示",
        addChildMenu:"添加子菜单",
        edit:"修改",
        delete:"删除",
    },
    msg:{ // 提示信息
        /*验证提示信息，命名规范：功能名称_validate_字段名称_验证类型（required:非空验证、length:长度验证）*/
        menu_validate_menuName_required:'请输入菜单名称',
        menu_validate_menuName_length:'长度在 1 到 30 个字符',
        menu_validate_menuSort_required:'请输入菜单排序号',
        menu_validate_menuChannel_length:'请选择菜单所属渠道',
    }
}
}