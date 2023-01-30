function maidenParty(data) {
    let partyBudget = Number(data[0]);
    let loveLetters = Number(data[1]);
    let waxRoses = Number(data[2]);
    let keyHangers = Number(data[3]);
    let caricatures = Number(data[4]);
    let luckSurprises = Number(data[5]);

    let totalPrice = loveLetters * 0.60 + waxRoses * 7.20 + keyHangers * 3.60 + caricatures * 18.20 + luckSurprises * 22;
    let totalProducts = loveLetters + waxRoses + keyHangers + caricatures + luckSurprises;

    if (totalProducts >= 25) {
        totalPrice = totalPrice * 0.65;
    }
    totalPrice = totalPrice * 0.90;

    if (partyBudget >= totalPrice) {
        let extraMoney = partyBudget - totalPrice;
        console.log(`Not enough money! ${extraMoney.toFixed(2)} lv needed.`);
    } else {
        let neededMoney = totalPrice - partyBudget;
        console.log(`Yes! ${neededMoney.toFixed(2)} lv left.`)
    }

}

maidenParty(["40.8",
"20",
"25",
"30",
"50",
"10"]);

