function ticketsMatch(data) {
    var pricesList = new Map([
        ['VIP',499.99],
        ['Normal',249.99]
    ]);
    var budget = Number(data[0]);
    var type = data[1];
    var count = Number(data[2]);
    var transport = 0;
    if (count <= 4) {
        transport = budget * 0.75;
    } else if (count >= 5 && count <= 9) {
        transport = budget * 0.60;
    } else if (count >= 10 && count <= 24) {
        transport = budget * 0.50;
    } else if (count >= 25 && count <= 49) {
        transport = budget * 0.40;
    } else {
        transport = budget * 0.25;
    }
    var extraMoney = budget - transport;
    var sum = count * pricesList.get(type);
    if (extraMoney > sum) {
        extraMoney = extraMoney - sum;
        console.log(`Yes! You have ${extraMoney.toFixed(2)} leva left.`)
    } else {
        extraMoney = sum - extraMoney;
        console.log(`Not enough money! You need ${extraMoney.toFixed(2)} leva.`)
    }
}

ticketsMatch(['30000','VIP','49']);