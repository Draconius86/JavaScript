function trekkingMania(input) {
    let countGroups = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let sum = 0;
    for (let i = 1; i < countGroups; i++) {
        sum += Number(input[i]);
        if (input[i] <= 5) {
            p1 += Number(input[i]);
        } else if (input[i] >= 6 && input[i] <= 12) {
            p2 += Number(input[i]);
        } else if (input[i] >= 13 && input[i] <= 25) {
            p3 += Number(input[i]);
        } else if (input[i] >= 26 && input[i] <= 40) {
            p4 += Number(input[i]); 
        } else {
            p5 += Number(input[i]);
        }
    }
    p1 = p1 / sum * 100;
    p2 = p2 / sum * 100;
    p3 = p3 / sum * 100;
    p4 = p4 / sum * 100;
    p5 = p5 / sum * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}

trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"])