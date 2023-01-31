function nthElement(arr) {
    let step = Number(arr.pop());
    let finalArr = [];    
    if (step > arr.length) {
        console.log(arr[0]);
    } else {
        for(let i = 0; i <= arr.length - 1; i += step) {
            let currNum = arr[i];
            finalArr.push(currNum);
        }
    }
    console.log(finalArr.join(" "));
}

nthElement(['5', '20', '31', '4', '20', '7']);