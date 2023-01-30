function histogram(data) {
    let num = Number(data[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    for (let i = 1; i <= num; i++) {
        if (data[i] < 200) {
            p1++;
        } else if (data[i] >= 200 && data[i] <= 399) {
            p2++; 
        } else if (data[i] >= 400 && data[i] <= 599) {
            p3++;
        } else if (data[i] >= 600 && data[i] <= 799) {
            p4++;
        } else {
            p5++;
        }
    }

        p1 = p1 / num * 100;
        p2 = p2 / num * 100;
        p3 = p3 / num * 100;
        p4 = p4 / num * 100;
        p5 = p5 / num * 100;    
        console.log(`${p1.toFixed(2)}%`);
        console.log(`${p2.toFixed(2)}%`);
        console.log(`${p3.toFixed(2)}%`);
        console.log(`${p4.toFixed(2)}%`);
        console.log(`${p5.toFixed(2)}%`);
}

histogram(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"]);