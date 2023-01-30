function bikeRace(data) {
    var juniorsMap = new Map([
        ['trail',5.50],
        ['cross-country',8],
        ['downhill',12.25],
        ['road',20]
    ]);
    var seniorsMap = new Map([
        ['trail',7],
        ['cross-country',9.50],
        ['downhill',13.75],
        ['road',21.50]
    ]);
    var countJuniors = Number(data[0]);
    var countSeniors = Number(data[1]);
    var raceType = data[2];
    var totalCount = countJuniors + countSeniors;
    var totalSum = 0;
    if (raceType === "cross-country" && totalCount >= 50) {
        sumJuniors = countJuniors * (juniorsMap.get(raceType) * 0.75);
        sumSeniors = countSeniors * (seniorsMap.get(raceType) * 0.75);
    } else {
        sumJuniors = countJuniors * juniorsMap.get(raceType);
        sumSeniors = countSeniors * seniorsMap.get(raceType);
    }
    totalSum = (sumJuniors + sumSeniors) * 0.95;
    console.log(totalSum.toFixed(2));
}

bikeRace(['21','26','cross-country']);