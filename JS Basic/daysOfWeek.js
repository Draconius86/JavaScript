function daysOfWeek(data) {
    var list = new Map([
        [1,'Monday'],
        [2,'Tuesday'],
        [3,'Wednesday'],
        [4,'Thursday'],
        [5,'Friday'],
        [6,'Saturday'],
        [7,'Sunday']
    ]);

    var num = Number(data[0]);

    if (num >= 1 && num <= 7) {
        console.log(list.get(num));
    } else {
        console.log('Error');
    }
}

daysOfWeek(['0']);