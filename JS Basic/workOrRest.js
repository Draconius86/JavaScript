function workOrRest(data) {
    let workWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    let weekEnd = ['Saturday', 'Sunday'];

    let day = data[0];

    if (workWeek.includes(day)) {
        console.log('Working day');
    } else if (weekEnd.includes(day)) {
        console.log('Weekend');
    } else {
        console.log('Error');
    }
}

workOrRest(['test']);