function biggestNumber(data) {
    let min = Number.MIN_SAFE_INTEGER;
    let num = 0;
    let i = 0;
    while (data[i] !== "Stop") {
        num = Number(data[i]);
        if (num > min) {
            min = num;
        }
        i++;
    }
    console.log(min);
}

biggestNumber(["45", "-20", "7", "99", "Stop"]);