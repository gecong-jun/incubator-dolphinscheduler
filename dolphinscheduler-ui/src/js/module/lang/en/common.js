export default {
// 按钮的中文
button: {
    button_test: 'button test',
    button_login: 'login',
    button_logging: 'logging...',
    query: 'query',
    reset: 'reset',
    edit: "edit",
    batchEdit: "batch edit",
    delete: "delete",
    batchDel: "batch delete",
    cancel: "cancel",
    ensure: "ensure",
    submit: "submit",
    confirm: "confirm",
    add: "add",
    dispose: "dispose",
    see: "see",
    cmd: "cmd",
    detail: "detail",
    release: "release",
    auth: "auth",
    export:"export",
    select:"select",
    set:"set",
    nxtset:"nxtset",
    save:"save",
    setTemp:"set template",
    approval:"approval",
    refund:"refund",
    next:"next",
    imported:"imported",
    down:"down",
    goodsUp:"goodsUp",
    preview: "preview",
    previewOld: "see introduction",
    bindPerson:"bind person",
    bindTerm:"bind equipment",
    bindMode:"bind mode",
    newStrategy:"new strategy",
    deleteSPU:"delete spu",
    ADDSKU:"add sku",
    DelSKU:'delete sku',
    paySet:"pay set",
    forbidden:"forbidden",
    meddle:"meddle",
    viewParam:"view param",
    enable:"enable",
    viewRule:"view rule",
    viewBaseAttr:"view baseAttr",
    saveModel:"correlation model",
    all:"all",
    close:"close",
},
select: {
    yes: "yes",
    no: "no",
},
// 输入框的提示语言
placeholder: {
    selected: "please select",
    selectedProvince: "please select province",
    selectedCity: "please select city",
    input: "please input",
    upload: "click on the upload",
    selectDate: "please select date"
},
// 上传文件和图片
upload: {
    tipOne: "please select",
    tipTwo: "file, and not exceeding"
},
// 输入框和form的label
label: {
    userName: "user name",
    phone: "phone",
    status: "status",
    enable: "enable",
    forbidden: "forbidden",
    serialNumber: "serial number",
    index: "index",
    describe: "describe",
    operation: "operation",
    remark: "remark",
    sexName: "sex name",
    name: "name",
    male: "male",
    female: "female",
    filePath: "file path",
    createTime: "create time",
    startTime: "start time",
    endTime: "end time",
    sortNum: "sort num",
    tenantId: "tenant id",
    picture: "picture",
    price: "price",
    termInfo: "term info",
    password: "password",
    confirmPossword: "confirm possword",
    regPassword: "regpassword",
    tenant: "tenant",
},
title:{
    success:'success',
    fail:'fail',
    delete:'delete',
    forbidden:'forbidden',
    seeDetails :'see details',
    setAuth:'set auth',

},
msg:{
    validate_error:'illegal submission',
    add_success:'add success',
    add_fail:'add fail',
    edit_success:'edit success',
    edit_fail:'edit fail',
    delete_success:'delete success',
    forbidden_success:'forbidden success',
    delete_fail:'delete fail',
    confirm_delete_cue:'confirm delete',
    confirm_forbidden_cue:'confirm forbidden',
    cancel_delete:'cancel delete',
    cancel_forbidden:'cancel forbidden',
    agree_success:'agree success',
    reject_success:'reject success',
    hide_success:'hide success',
    cancelled:'has been cancelled',
    hide_menu:'hide menu',
    show_success:'show success',
    confirm_tips:'Confirm to delete this item?',
    oper_success:'Operation success',
    oper_fail:'Operation fail',
},
list:{
    dataNull:"temporarily no data"
},

/* XX模块翻译 */

/*终端模块*/
device: {
    label: {
        device_list: "设备列表",
        pid_info: "进程信息",
        owner_org: "所属机构",
        device_type: "设备类型",
        device_brand: "设备品牌",
        pid_id: "进程ID",
        pid_name: "进程名称",
        index: "序号",
        device_model: "设备型号",
        pid_path: "进程路径",
        cpu_rate: "CPU使用率（%）",
        ram_rate: "内存使用量（KB）",
        disk_rate: "磁盘使用量（KB）",
        disk_name: "存储器名称",
        capacity: "容量（MB）",
        soft_info: "软件信息",
        term_info: "设备信息",

        cmd_type: "指令类型",
        exec_result: "操作结果",
        send_start_date: "起始发送日期",
        send_end_date: "结束发送日期",
        send_time: "发送时间",
        exec_time: "执行时间",
        error_code: "错误代码",

        reboot: "终端重启",
        shutdown: "终端关机",
        activate: "终端激活",
        stop: "终端报停",
        self_check: "终端自检",
        screenshot: "终端截图",
        resume: "恢复服务",
        pause: "暂停服务",
        pull_log: "提取日志",
        pull_file: "提取文件",
        push_script: "远程下发脚本",
        update_time: "更新时间配置",
        communication_test: "远程通讯测试",
        refreshTermStatus: "刷新设备状态",
        updateAgentConfig: "更新Agent配置文件",
        exec_way: "执行方式",
        exec_im: "立即执行",
        exec_interval: "定时执行",
        delay_time: "延时时间（秒）",
        selected_term: "所选设备",
        plan_resume_time: "预设恢复服务时间",
        soft_name: "软件名称",
        soft_path: "软件路径",
        size: "大小",
        install_time: "安装时间",
        publisher: "发布者",
        ip: "IP地址",
        soft_version: "软件版本",

    },
    button: {
        see: "查看信息",

    },
},

maintenace:{
    msg:{
        sync_supplier:"同步维保服务商成功",
    }
},
/* 排班模块翻译 */
scheduling: {
    button:{

    },
    label:{
        // 节假日管理
        year:"所属年份",
        feastDayName:"节假日名称",
        vacationDate:"节日日期",
        type:"节假日类型",
        parentType:"节日父类型",
        leafType:"节日子类型",
        feastDayNum:"节日天数",
        feastDayOrg:"所属机构",
        // 营业计划管理
        planName:"计划名称",
        becomeEffectiveTime:"生效时间"

    },
    placeholder:{
        select:"please select",
        select_multi:"please select one or more dates",
    },
    title:{
        // 节假日管理
        add_feastDay:"添加节假日",
        edit_feastDay:"编辑节假日",
        // 营业计划管理
        add_plan:"添加营业计划",
        edit_plan:"编辑营业计划",
        cat_plan:"查看营业计划",
    },
    msg:{
        // 节假日管理
        validate_year_required:"请选择所属年份",
        validate_feastDayName_required:"请输入节假日名称",
        validate_feastDayName_length:'长度在 1 到 32 个字符',
        validate_vacationDate_required:"请选择节日的日期",
        validate_parentType_required:"请选择节假日父类型",
        validate_leafType_required:"请选择节假日子类型",
        validate_feastDayOrg_required:"请选择所属机构",
        // 营业计划管理
        validate_planName_required:"请输入营业计划名称",
        validate_planName_length:'长度在 1 到 32 个字符',
        validate_becomeEffectiveTime_required:"请选择生效时间",

    }
}
}
