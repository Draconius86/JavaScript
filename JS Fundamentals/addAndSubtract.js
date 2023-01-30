function addAndSubtract(arr) {
    let newArr = [];
    let newIndex = 0;
    let sum = 0;
    let newSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newIndex = arr[i] + i;
            newArr.push(newIndex);
            sum += arr[i];
            newSum += newIndex;
        } else {
            newIndex = arr[i] - i;
            newArr.push(newIndex);
            sum += arr[i];
            newSum += newIndex;
        }
    }
    console.log(newArr);
    console.log(sum);
    console.log(newSum);
}

addAndSubtract([5, 15, 23, 56, 35]);