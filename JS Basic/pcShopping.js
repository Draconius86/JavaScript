function pcShopping(data) {
    var totalBudget = Number(data[0]);
    var gpuCount = Number(data[1]);
    var cpuCount = Number(data[2]);
    var ramCount = Number(data[3]);
    var gpuPrice = 250;
    var gpuTotal = gpuCount * gpuPrice;
    var cpuPrice = gpuTotal / 100 * 35;
    var ramPrice = gpuTotal / 100 * 10;
    var totalMoney = gpuTotal + cpuCount * cpuPrice + ramCount * ramPrice;
    if (gpuCount > cpuCount) {
        totalMoney = totalMoney - (totalMoney * 15 / 100);
    }
    if (totalMoney > totalBudget) {
        var moneyNeeded = totalMoney - totalBudget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`) 
    } else {
        var moneyExtra = totalBudget - totalMoney;
        console.log(`You have ${moneyExtra.toFixed(2)} leva left!`)
    }
}

pcShopping(['900', '2', '1', '3']);