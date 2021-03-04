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
    lengthBetween:'{field} ‘s length must be between {min} from {max}',
    required:'{field} is required',
    numberRequired:'{field} must be Number Type',
    range:'Range from {min} to {max}',
    enNumberLineMsg: 'Only numbers or English characters or underline allowed ',
    cnEnNumInputMsg: 'Only numbers or English or Chinese characters allowed',
    errorInput:'Illegal submission',
    passwordVal:"Including at least three types of numbers, uppercase letters, lowercase letters, and special characters",
}
