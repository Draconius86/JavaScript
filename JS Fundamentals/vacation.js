function vacation(count, type, day) {
    let priceList = {
        "Students": {
            "Friday": 8.45,
            "Saturday": 9.80,
            "Sunday": 10.46
        },
        "Business": {
            "Friday": 10.90,
            "Saturday": 15.60,
            "Sunday": 16.00
        },
        "Regular": {
            "Friday": 15.00,
            "Saturday": 20.00,
            "Sunday": 22.50
        }
    };
    let sum = 0;
    if (count >= 100 && type === "Business") {
        count = count - 10;
        sum = count * priceList[type][day];
    } else if (count >= 30 && type === "Students") {
        sum = count * priceList[type][day] * 0.85;
    } else if (count >= 10 && count <= 20 && type === "Regular") {
        sum = count * priceList[type][day] * 0.95;
    } else {
        sum = count * priceList[type][day];
    }
    console.log(`Total price: ${sum.toFixed(2)}`);
}

vacation(40, 'Regular', 'Saturday');
