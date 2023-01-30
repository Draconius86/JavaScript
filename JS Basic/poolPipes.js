function fillThePool(data) {
    var volumePool = Number(data[0]);
    var pipe1 = Number(data[1]);
    var pipe2 = Number(data[2]);
    var hoursMissing = Number(data[3]);

    var totalWater = pipe1 * hoursMissing + pipe2 * hoursMissing;
    var Percent = volumePool / 100;
    var pipe1PercentTotal = (pipe1 * hoursMissing) / Percent;
    var pipe2PercentTotal = (pipe2 * hoursMissing) / Percent;
    var totalPercent = pipe1PercentTotal + pipe2PercentTotal;
    var pipe1PercentSingle = ((pipe1 * hoursMissing) * 100) / totalWater;
    var pipe2PercentSingle = ((pipe2 * hoursMissing) * 100) / totalWater;
    if (totalWater <= volumePool) {
        console.log(`The pool is ${totalPercent.toFixed(2)}% full. Pipe 1: ${pipe1PercentSingle.toFixed(2)}%. Pipe 2: ${pipe2PercentSingle.toFixed(2)}%`);
    } else {
        var overflow = totalWater - volumePool;
        console.log(`For ${hoursMissing} hours the pool overflows with ${overflow.toFixed(2)} liters.`);
    }
}

fillThePool(['1000','100','120','3']);