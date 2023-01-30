function transportPrice(input) {
    let distance = Number(input[0]);
    let timeOfDay = input[1];
    let dayTaxi = distance * 0.79 + 0.70;
    let nightTaxi = distance * 0.90 + 0.70;
    let bus = distance * 0.09;
    let train = distance * 0.06;
 
    if (distance < 20 && timeOfDay === `day`) {
        console.log(dayTaxi);
    } else if (distance < 20 && timeOfDay !== `day`) {
        console.log(nightTaxi.toFixed(2));
    }
    if (distance >= 20 && distance < 100) {
        console.log(Math.min(bus, dayTaxi, nightTaxi).toFixed(2));
    } else if (distance >= 100) {
        console.log(Math.min(train, bus, dayTaxi, nightTaxi).toFixed(2));
    }
}

transportPrice(["180", "night"])