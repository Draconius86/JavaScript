function tennisRanklist(data) {
    let countTmnts = Number(data[0]);
    let startingPoints = Number(data[1]);
    let earnedPoints = 0;
    let wonTmnts = 0;
    for (i = 2; i < data.length; i++) {
        switch(data[i]) {
            case "W": earnedPoints += 2000; wonTmnts += 1; break;
            case "F": earnedPoints += 1200; break;
            case "SF": earnedPoints += 720; break;
        }
    }
    let totalPoints = earnedPoints + startingPoints;
    let avrgPoints = earnedPoints / countTmnts
    let wonPrcnt = wonTmnts / countTmnts * 100;
    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(avrgPoints)}`);
    console.log(`${wonPrcnt.toFixed(2)}%`);
}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);