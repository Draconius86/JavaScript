function finalComp(data) {
    let dancers = Number(data[0]);
    let points = Number(data[1]);
    let season = data[2];
    let place = data[3];
    let totalPrice = 0;
    let expeneses = 0;

    let examMap = {
        "Bulgaria": {
            "summer": 5,
            "winter": 8
          },
        "Abroad": {
            "summer": 10,
            "winter": 15
          }
    };

if (place === "Bulgaria") {
    totalPrice = dancers * points;
} else {
    totalPrice = dancers * points * 1.5;
}

expeneses = totalPrice * (examMap[place][season]) / 100;

totalPrice = totalPrice - expeneses;

let charity = totalPrice * 0.75;

let restMoney = totalPrice - charity;

let moneyPerDancer = restMoney / dancers;

console.log(`Charity - ${charity.toFixed(2)}`);
console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);

}

finalComp(["1",
"89.5",
"summer",
"Abroad"])