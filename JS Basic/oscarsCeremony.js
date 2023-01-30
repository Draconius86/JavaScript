function oscarsCeremony(data) {
    let hallRent = Number(data[0]);
    let statuesPrice = hallRent * 0.7;
    let catheringPrice = statuesPrice * 0.85;
    let soundPrice = catheringPrice / 2;
    let totalPrice = hallRent + statuesPrice + catheringPrice + soundPrice;
    console.log(`${totalPrice.toFixed(2)}`);
}

oscarsCeremony(['3500']);