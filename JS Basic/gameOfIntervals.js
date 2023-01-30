function gameOfIntervals(data) {
    let totalMoves = Number(data[0]);
    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    let num4 = 0;
    let num5 = 0;
    let num6 = 0;
    let sum = 0;
    for (let i = 1; i <= totalMoves; i++) {
        let position = Number(data[i]);
        if (position >= 0 && position <= 9) {
            sum += position * 0.2;
            num1 += 1;
        } else if (position >= 10 && position <= 19) {
            sum += position * 0.3;
            num2 += 1;
        } else if (position >= 20 && position <= 29) {
            sum += position * 0.4;
            num3 += 1;
        } else if (position >= 30 && position <= 39) {
            sum += 50;
            num4 += 1;
        } else if (position >= 40 && position <= 50) {
            sum += 100;
            num5 += 1;
        } else {
            sum /= 2;
            num6 += 1;
        }
    }
    let prcntNum1 = num1 / totalMoves * 100;
    let prcntNum2 = num2 / totalMoves * 100;
    let prcntNum3 = num3 / totalMoves * 100;
    let prcntNum4 = num4 / totalMoves * 100;
    let prcntNum5 = num5 / totalMoves * 100;
    let prcntNum6 = num6 / totalMoves * 100;

    console.log(sum.toFixed(2));
    console.log(`From 0 to 9: ${prcntNum1.toFixed(2)}%`);
    console.log(`From 10 to 19: ${prcntNum2.toFixed(2)}%`);
    console.log(`From 20 to 29: ${prcntNum3.toFixed(2)}%`);
    console.log(`From 30 to 39: ${prcntNum4.toFixed(2)}%`);
    console.log(`From 40 to 50: ${prcntNum5.toFixed(2)}%`);
    console.log(`Invalid numbers: ${prcntNum6.toFixed(2)}%`);
}

gameOfIntervals(['10','43','57','-12','23','12','0','50','40','30','20'])