function logistics(data) {
    let countCargo = Number(data[0]);
    let sumBus = 0;
    let sumTruck = 0;
    let sumTrain = 0;
    let weightBus = 0;
    let weightTruck = 0;
    let weightTrain = 0;
    for (let i = 1; i <= countCargo; i++) {
        let weight = Number(data[i]);
        if (weight <= 3) {
            sumBus += weight * 200;
            weightBus += weight;
        } else if (weight >= 4 && weight <= 11) {
            sumTruck += weight * 175;
            weightTruck += weight;
        } else {
            sumTrain += weight * 120;
            weightTrain += weight;
        }
    }
    let totalWeight = weightBus + weightTrain + weightTruck;
    let totalSum = sumBus + sumTrain + sumTruck;
    let avrgPrice = totalSum / totalWeight;
    let busPrcnt = weightBus / totalWeight * 100;
    let truckPrcnt = weightTruck / totalWeight * 100;
    let trainPrcnt = weightTrain / totalWeight * 100;
    console.log(avrgPrice.toFixed(2));
    console.log(`${busPrcnt.toFixed(2)}%`);
    console.log(`${truckPrcnt.toFixed(2)}%`);
    console.log(`${trainPrcnt.toFixed(2)}%`);
}

logistics(['4','1','5','16','3']);