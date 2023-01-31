function nonDecreasingSubset(array) {

    let newArr = [];
    let biggest = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];

        if (currentNum >= biggest) {
            biggest = currentNum;
            newArr.push(biggest);
        } else {
            continue;
        }
    }

    console.log(newArr.join(" "));
}