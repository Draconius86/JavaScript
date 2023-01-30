function averageNumber(data) {
    let count = Number(data[0]);
    let num = 0;
    for (i = 1; i <= count; i++) {
        num += Number(data[i]);
    }
    let avrg = num / count;
    console.log(avrg.toFixed(2));
}

averageNumber(['4','3','2','4','2']);