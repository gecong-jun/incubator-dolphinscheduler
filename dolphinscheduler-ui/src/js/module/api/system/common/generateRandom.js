const numArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const lowercaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const capitalArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let arrTemp = [].concat(numArray);
arrTemp = arrTemp.concat(lowercaseArr);
arrTemp = arrTemp.concat(capitalArr);

function getArrRandom(n, arr) {
    let tmp = "";
    for (let i = 0; i < n; i++) {
        let random = Math.round(Math.random() * (arr.length - 1));
        let tempStr = arr[random];
        if (!tempStr) {
            tempStr = '4';
        }
        tmp += tempStr;
    }
    return tmp;
}

export function getRandomCharacter(n) {
    return getArrRandom(n, arrTemp);
}
