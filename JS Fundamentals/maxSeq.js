function maxSequence(array) {
    let resultArr = []
    let times = 0
    let currNum = Number(0)
    let currentArr = []
    for (let i = 0; i <= array.length - 1; i++) {
        times++
        //2, 2, 1, 2, 3, 3, 2, 2, 2, 2, 1
        if (times == 1) {
            currNum = array[0]
            currentArr.push(currNum)
            continue;
        }
        if (array[i] == currNum) {
            currNum = array[i]
            currentArr.push(array[i])
            if (currentArr.length > resultArr.length) {
                resultArr.length = 0
                for (let o = 0; o <= currentArr.length - 1; o++) {
                    let digit = currentArr[o]
                    resultArr.push(digit)
                }
            }
        }
        else if (array[i] != currNum) {
            currNum = array[i]
            currentArr.length = 0
            currentArr.push(array[i])
        }
    }
    console.log(resultArr.join(" "));
}

maxSequence([2, 2, 1, 1, 3, 3]);