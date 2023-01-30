function cinemaTicket(input) {
    var weekDay = input[0];

    let wholeWeek = new Map([
        ['Monday', 12],
        ['Tuesday', 12],
        ['Wednesday', 14],
        ['Thursday', 14],
        ['Friday', 12],
        ['Saturday', 16],
        ['Sunday', 16]
    ]);

    var daysOfWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

    if (daysOfWeek.includes(`${weekDay}`)) {
        console.log(wholeWeek.get(weekDay));
    }
}

cinemaTicket(['Monday']);