function worldRecord(data) {
    let recordTime = Number(data[0]);
    let distance = Number(data[1]);
    let speedTime = Number(data[2]);

    let delayTime = Math.floor(distance / 15) * 12.5;

    let timeWithDelay = distance * speedTime + delayTime;

    if (timeWithDelay < recordTime) {
        console.log(`Yes, he succeeded! The new world record is ${timeWithDelay.toFixed(2)} seconds.`);
    } else {
        let timeSlower = timeWithDelay - recordTime;
        console.log(`No, he failed! He was ${timeSlower.toFixed(2)} seconds slower.`)
    }
}

worldRecord(['10464', '1500', '20']);