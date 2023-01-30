function cleverLily(data) {
    let age = Number(data[0]);
    let priceWM = Number(data[1]);
    let toyPrice = Number(data[2]);
    let money = 10;
    let toys = 0;
    let safeMoney = 0;
    let toyMoney = 0;
    
    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            safeMoney += money - 1;
            money += 10; 
        } else {
            toys++;
        } 
    }
    
    toyMoney = toys * toyPrice;
    let allMoney = toyMoney + safeMoney;

    if (allMoney >= priceWM) {
        let restMoney = allMoney - priceWM;
        console.log(`Yes! ${restMoney.toFixed(2)}`);
    } else {
        let neededMoney = priceWM - allMoney;
        console.log(`No! ${neededMoney.toFixed(2)}`);
    }
}

cleverLily(['10','170.00','6']);