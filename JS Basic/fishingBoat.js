function fishingBoat(data) {
    var budget = Number(data[0]);
    var season = data[1];
    var countFishermen = Number(data[2]);
    var price = 0;
    var seasonList = new Map([
        ['Spring', 3000],
        ['Summer', 4200],
        ['Autumn', 4200],
        ['Winter', 2600]
    ]);

    if (countFishermen <= 6) {
        price = seasonList.get(season) * 0.9;
    } else if (countFishermen >= 7 && countFishermen <= 11) {
        price = seasonList.get(season) * 0.85;
    } else {
        price = seasonList.get(season) * 0.75;
    }
    
    if (season !== "Autumn" && (countFishermen % 2 == 0)) {
        price = price * 0.95;
    } else {
        price = price;
    }

    if (budget >= price) {
        var moneyLeft = budget - price;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        var neededMoney = price - budget;
        console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva.`)
    }
}

fishingBoat(['3000','Summer','11']);