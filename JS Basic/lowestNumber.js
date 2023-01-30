function lowestNumber(data) {
    let max = Number.MAX_SAFE_INTEGER;
    let num = 0;
    let i = 0;
    while (data[i] !== "Stop") {
        num = Number(data[i]);
        if (num < max) {
            max = num;
        }
        i++;
    }
    console.log(max);
}

lowestNumber(["45", "-20", "7", "99", "Stop"]);