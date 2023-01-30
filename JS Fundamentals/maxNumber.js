function maxNumber(arr) {
    let newArr = [];
    let isBigger = false;
    let currentArr = [...arr];
    for (let i = 0; i < arr.length; i++) {
        let currNum = currentArr.shift();
        for (let j = 0; j <= currentArr.length; j++) {
                let checkedNum = currentArr[j];
                if (currNum <= checkedNum) {
                    isBigger = false;
                    break;
                } else {
                    isBigger = true;
                }
            }
        if (isBigger) {
            newArr.push(currNum);
        }
    }
    console.log(newArr.join(" "));
}

maxNumber([41,41,34,20]);

function max(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        let isBigger = false;
        let num = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (num > arr[j]) {
                isBigger = true;
            } else {
                isBigger = false;
                break;
            }
        }
        if (isBigger === true) {
            result += num + " ";
        }
    }
    let lastElementIndex = arr.length - 1;
    console.log(result + `${arr[lastElementIndex]}`);
}