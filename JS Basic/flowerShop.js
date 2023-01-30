function flowerShop(data) {
    var countMagnolia = Number(data[0]);
    var countZiumbiul = Number(data[1]);
    var countRoza = Number(data[2]);
    var countkaktus = Number(data[3]);
    var giftPrice = Number(data[4]);

    var totalMoney = countMagnolia * 3.25 + countZiumbiul * 4 + countRoza * 3.50 + countkaktus * 8;
    totalMoney = totalMoney - (totalMoney * 5 / 100);

    if (totalMoney >= giftPrice) {
        var moneyLeft = Math.floor(totalMoney - giftPrice);
        console.log(`She is left with ${moneyLeft} leva.`);
    } else {
        var moneyNeed = Math.ceil(giftPrice - totalMoney);
        console.log(`She will have to borrow ${moneyNeed} leva.`)
    }
}

flowerShop(['2','3','5','1','50']);