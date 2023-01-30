function equalSums(arr) {
    let rightSum = 0;
    let leftSum = 0;
    let isEqual = false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let rightNum = arr[j];
            rightSum += rightNum;
        }
        if (i === 0) {
            leftSum = 0;
        } else {
            for (let k = i - 1; k > -1; k--) {
                let leftNum = arr[k];
                leftSum += leftNum;
            }
        }
        if (leftSum === rightSum) {
            isEqual = true;
            console.log(i);
        }
        leftSum = 0;
        rightSum = 0;
    }
    if (!isEqual) {
        console.log(`no`);
    }
}

equalSums([1]);