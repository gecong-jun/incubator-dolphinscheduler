export default {
    length (field, {min, max}) {
        if (min && !max) {
          return `${field}的长度必须大于${min}位`;
        } else if (!min && max) {
          return `${field}的长度不能超过${max}位`;
        } else if (min && max) {
          return `${field}'s length must be between ${min} from ${max}`;
        }
    },
    lengthBetween:'{field} 的长度在{min} 和 {max} 之间',
    required:'请填写{field}',
    numberRequired:'{field} 必须是数字类型',
    range:'范围在 {min} 到 {max}',
    enNumberLineMsg: '只能包含数字、英文和下划线',
    cnEnNumInputMsg: '只能包含中英文和数字',
    errorInput:'提交不合法',
    passwordVal:"至少包含数字、大写字母、小写字母、特殊字符中的三种",
}
