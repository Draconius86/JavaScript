function fuelTank(data) {
    var fuelType = data[0];
    var fuelLtrs = Number(data[1]);
    var discCard = data[2];

    var priceGasoline = 2.22;
    var priceDiesel = 2.33;
    var priceGas = 0.93;

    if (discCard === "Yes") {
        priceGasoline = priceGasoline - 0.18;
        priceDiesel = priceDiesel - 0.12;
        priceGas = priceGas - 0.08;
    }

    if (fuelType === "Gasoline") {
        fuelPrice = fuelLtrs * priceGasoline;
    } else if (fuelType === "Diesel") {
        fuelPrice = fuelLtrs * priceDiesel;
    } else {
        fuelPrice = fuelLtrs * priceGas;
    }

    if (fuelLtrs <= 25 && fuelLtrs >= 20) {
        fuelPrice = fuelPrice - (fuelPrice * 8 / 100);
    } else if (fuelLtrs > 25) {
        fuelPrice = fuelPrice - (fuelPrice * 10 / 100);
    }
    console.log(`${fuelPrice.toFixed(2)} lv.`);
}

fuelTank(['Gasoline','25','No']);