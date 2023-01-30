function spiceMustFlow(yield) {
    let days = 0;
    let totalSum = 0;
    while (yield >= 100) {
        totalSum += (yield - 26);
        yield -= 10;
        days++;
    }
    if (totalSum >= 26) {
        totalSum -= 26;
    }
    console.log(days);
    console.log(totalSum);
}

spiceMustFlow(450);