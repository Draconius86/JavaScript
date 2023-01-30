function twoKplus1(data) {
    let num = Number(data[0]);
    let n = 1
    while (n <= num) {
        console.log(n);
        n = 2 * n + 1;
    }
}

twoKplus1(['15']);