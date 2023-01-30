function condenseArray(arr) {
    let currArr = arr;
    while (currArr.length > 1) {
        let newArr = [];
        for (let i = 0; i < currArr.length - 1; i++) {
            let first = currArr[i];
            let second = currArr[i + 1];
            newArr.push(first + second);
        }
        currArr = newArr;
    }
    console.log(Number(currArr));
}

condenseArray([2,10,3,6,8,9,12])