function reverseArray(n, input) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let elem = input[i];
        arr.push(elem);
    }
    arr = arr.reverse().join(' ');
    console.log(arr);
}

reverseArray(4, [-1, 20, 99, 5]);