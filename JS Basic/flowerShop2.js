function flowerShop(data) {
    var countHriz = Number(data[0]);
    var countRoza = Number(data[1]);
    var countLale = Number(data[2]);
    var seasonType = data[3];
    var weekEnd = data[4];
    var totalSum = 0;
    var totalCount = countHriz + countRoza + countLale;
    if (seasonType === "Spring" || seasonType === "Summer") {
        totalSum = countHriz * 2 + countLale * 2.5 + countRoza * 4.10;
    } else {
        totalSum = countHriz * 3.75 + countLale * 4.15 + countRoza * 4.50;
    }
    if (weekEnd === "Y") {
        totalSum = totalSum * 1.15; 
    } else {
        totalSum = totalSum;
    }
    if (countLale > 7 && seasonType === "Spring") {
        totalSum = totalSum * 0.95;
    } else {
        totalSum = totalSum;
    }
    if (countRoza >= 10 && seasonType === "Winter") {
        totalSum = totalSum * 0.90;
    } else {
        totalSum = totalSum;
    }
    if  (totalCount > 20) {
        totalSum = totalSum * 0.80;
    } else {
        totalSum = totalSum;        
    }
    totalSum = totalSum + 2;
    console.log(totalSum.toFixed(2));
}
flowerShop(['3','10','9','Winter','N']);