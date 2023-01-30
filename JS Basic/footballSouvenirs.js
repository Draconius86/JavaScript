function footballSouvenirs(data) {
    let country = data[0];
    let stock = data[1];
    let count = Number(data[2]);
    let stockList = ['flags', 'caps', 'posters', 'stickers'];
    let countryList = ['Argentina', 'Brazil', 'Croatia', 'Denmark'];
    let stockPriceList = {
        "flags": {
            "Argentina": 3.25,
            "Brazil": 4.20,
            "Croatia": 2.75,
            "Denmark": 3.10
        },
        "caps": {
            "Argentina": 7.20,
            "Brazil": 8.50,
            "Croatia": 6.90,
            "Denmark": 6.50
        },
        "posters": {
            "Argentina": 5.10,
            "Brazil": 5.35,
            "Croatia": 4.95,
            "Denmark": 4.80
        },
        "stickers": {
            "Argentina": 1.25,
            "Brazil": 1.20,
            "Croatia": 1.10,
            "Denmark": 0.90
        }
    };
    let validCountry = countryList.includes(country);
    let validStock = stockList.includes(stock);
    if (validCountry === false) {
        console.log(`Invalid country!`);
    } else if (validStock === false) {
        console.log(`Invalid stock!`);
    } else {
        let totalPrice = count * stockPriceList[stock][country];
        console.log(`Pepi bought ${count} ${stock} of ${country} for ${totalPrice.toFixed(2)} lv.`);
    }
}

footballSouvenirs(['Brazill', 'caps', '46']);