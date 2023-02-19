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
