function toyShop(input) {
    let puzzlePrice = 2.60;
    let dollPrice = 3.00;
    let teddyBearPrice = 4.10;
    let minionPrice = 8.20;
    let truckPrice = 2.00;
 
    let vacantionPrice = Number(input[0]);
    let puzzleNum = Number(input[1]);
    let dollNum = Number(input[2]);
    let teddyBearNum = Number(input[3]);
    let minionNum = Number(input[4]);
    let truckNum = Number(input[5]);
 
    let toysNum = puzzleNum + dollNum + teddyBearNum + minionNum + truckNum;
    let toysTotal = (puzzleNum * puzzlePrice);
        toysTotal += (dollNum * dollPrice);
        toysTotal += (teddyBearNum * teddyBearPrice);
        toysTotal += (minionNum * minionPrice);
        toysTotal += (truckNum * truckPrice);
 
    if (toysNum >= 50) {
        toysTotal = toysTotal - (toysTotal * 0.25);
    }
 
    let rentValue = toysTotal * 0.1;
    let profit = toysTotal - rentValue;
    let moneyLeft = profit - vacantionPrice;
 
    if (moneyLeft >= 0) {
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
        return;
    }
    if (moneyLeft < 0) { 
        console.log(`Not enough money! ${Math.abs(moneyLeft).toFixed(2)} lv needed.`)
    }
}

toyShop(['320', '8', '2', '5', '5', '1', ]);