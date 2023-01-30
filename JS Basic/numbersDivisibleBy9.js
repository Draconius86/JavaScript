function numbersDivisibleBy9(data) {
    let start = Number(data[0]);
    let end = Number(data[1]);
    let sum = 0;
    for (i = start; i <= end; i++) {
        if (i % 9 === 0) {
            sum += i;
        
        }
    }
    console.log(`The sum: ${sum}`);
    for (i = start; i <= end; i++) {
        if (i % 9 === 0) {
            console.log(i);
        }
    }
}

numbersDivisibleBy9(['100','207']);