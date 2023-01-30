function plus15Mins(data) {
    let hours = Number(data[0]);
    let minutes = Number(data[1]);
    let minsPlus15 = minutes + 15;
    if (minsPlus15 >= 60) {
        hours = hours + 1;
        minutes = minsPlus15 % 60;  
    } else {
        minutes = minsPlus15;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    } else {
        minutes = minutes;
    }

    if (hours < 24) {
        hours = hours;
    } else {
        hours = hours % 24;
    }

    console.log(`${hours}:${minutes}`);
}

plus15Mins(['48', '35']);