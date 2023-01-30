function newHome(data) {
    var flowers = new Map([
        ['Roses', 5],
        ['Dahlias', 3.80],
        ['Tulips', 2.80],
        ['Narcissus', 3],
        ['Gladiolus', 2.50]
    ]);

    var type = data[0];
    var count = Number(data[1]);
    var budget = Number(data[2]);

    var price = count * flowers.get(type);

    if (type === "Roses" && count > 80) {
        price = price - (price * 10) / 100;
    } else if ((type === "Dahlias" && count > 90) || (type === "Tulips" && count > 80)) {
        price = price - (price * 15) / 100;
    } else if (type === "Narcissus" && count < 120) {
        price = price + (price * 15) / 100;
    } else if (type === "Gladiolus" && count < 80) {
        price = price + (price * 20) / 100;
    } else {
        price = price;
    }

    if (budget >= price) {
        var moneyLeft = budget - price;
        console.log(`Hey, you have a great garden with ${count} ${type} and ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        var neededMoney = price - budget;
        console.log(`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`);
    }
}

newHome(["Roses","55","250"]);