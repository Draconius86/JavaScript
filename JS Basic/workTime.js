function workDays(input) {
    var daysOfWork = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var hour = Number(input[0]);
    var day = input[1];

    if (daysOfWork.includes(day) && hour >= 10 && hour <= 18) {
        console.log('open');
    } else {
        console.log('closed');
    }
}

workDays(['19','Monday']);