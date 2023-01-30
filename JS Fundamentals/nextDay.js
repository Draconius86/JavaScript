function nextDay(year, month, day) {
    let longMonths = [1,3,5,7,8,10];
    let shortMonths = [4,6,9,11];
    if (year < 1900) {
        year = year + 1900;
    }
    if (longMonths.includes(month) && day === 31) {
        console.log(`${year}-${month+1}-1`);
    } else if (shortMonths.includes(month) && day === 30) {
        console.log(`${year}-${month+1}-1`);
    } else if ((month === 2 && day === 29) || (month === 2 && day === 28 && year % 4 !== 0)) {
        console.log(`${year}-${month+1}-1`);
    } else if (day === 31 && month === 12) {
        console.log(`${year+1}-1-1`);
    } else {
        console.log(`${year}-${month}-${day+1}`);
    }
}

nextDay(2020, 10, 31);