export default {
  // 机构管理
  business: {
    label: { // 列表/表单标题文字
      // 权限资源
      orgNumber: "organization number",
      orgName: "Organization Name",
      orgCode: "Organization Code",
      parentText: "Parent Organization",
      basicInfo: "Basic Info",
      otherInfo: "Other Info",
      orgType: "Organization Type",
      province: "Province",
      city: "City",
      area: "Area",
      address: "Address",
      phone: "Phone",
      postalCode: "Postcode",
      surroundingEnvironment: "Surroundings",
      trafficConditions: "Traffic Conditions",
      longitude: "Longitude",
      latitude: "Latitude",
      sortNum: "Sort Number",
    },
    button: { // 按钮文字
      editParentText: "Modify Parent Organization",
      addSubOrg: "Add Sub Organization"
    },
    title: { // 弹出框标题
      addOrganization: "Add Organization",
      editParentText: "Modify Parent Organization",
      editOrganization: "Edit Organization",
      seeDetail: "See Detail",
      confirmDel: "Confirm delete [{orgName}] ?",
      orderNum: "The sorting number must not be greater than 999",
      selectOrg: "Please select an organization from the left menu first",
      deleteOrg: "Delete Organization",
    },
    msg: { // 提示信息
      /*验证提示信息，命名规范：功能名称_validate_字段名称_验证类型（required:非空验证、length:长度验证）*/
      org_validate_orgCode_required: 'please enter a organization code',
      org_validate_orgCode_length: 'the organization code is 1 to 20 characters in length',
      org_validate_orgName_required: 'please enter a organization name',
      org_validate_orgName_length: 'the organization name is 1 to 30 characters in length',
      org_validate_orgType_required: 'please select a organization type',
      org_validate_menuNo_required: 'please enter organization sort number',
      org_validate_postalCode_required: 'the zip code is six digits',
      org_validate_addr_length: 'the address is 1 to 100 characters in length',
      org_validate_contactNum_length: 'the contactNum is 1 to 30 characters in length',
      org_validate_environment_length: 'the environment is 1 to 100 characters in length',
      org_validate_traffic_length: 'the traffic is 1 to 100 characters in length',
      oper_success: 'Operation success',
      phoneValidMsg: "phone number could only contains 'number' and '-' and '*'",
      numOrXiaoMsg: 'please input decimal number',
      formatOrRangeErr: 'format or range incorrect',
    }
  }
}
