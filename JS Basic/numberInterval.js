function numberInterval(data) {
    var number = Number(data[0]);

    if (number >= -100 && number <= 100 && number != 0) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

numberInterval(['3'])