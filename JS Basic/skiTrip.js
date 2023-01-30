function skiTrip(data) {
    var prices = new Map([
        ['room for one person', 18],
        ['apartment', 25],
        ['president apartment', 35]
    ]);

    var countDays = Number(data[0]) - 1;
    var type = data[1];
    var note = data[2];

    var totalPrice = prices.get(type) * countDays;

    switch(type) {

        case "room for one person": break;
        case "apartment": if (countDays < 10) {
            totalPrice = totalPrice * 0.70;
        } else if (countDays >= 10 && countDays <= 15) {
            totalPrice = totalPrice * 0.65;
        } else {
            totalPrice = totalPrice * 0.50;
        } break;
        case "president apartment": if (countDays < 10) {
            totalPrice = totalPrice * 0.90;
        } else if (countDays >= 10 && countDays <= 15) {
            totalPrice = totalPrice * 0.85;
        } else {
            totalPrice = totalPrice * 0.80;
        } break;
    }

    if (note === "positive") {
        totalPrice = totalPrice * 1.25;
    } else {
        totalPrice = totalPrice * 0.90;
    }

    console.log(totalPrice.toFixed(2));

}

skiTrip(['30','president apartment','negative']);