function multiplicationTable(data) {
    let num = Number(data[0]);
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum = i * num;
        console.log(`${i} * ${num} = ${sum}`)
    }
}

multiplicationTable(['7'])