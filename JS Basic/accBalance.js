function accBalance(data) {
    let i = 0;
    let total = 0;
    while (data[i] !== "NoMoreMoney") {
        let amount = Number(data[i]);
        if (amount >= 0) {
            console.log(`Increase: ${amount.toFixed(2)}`);
            total += amount;
        } else {
            console.log(`Invalid operation!`);
            break;
        }
        i++;
    }
    console.log(`Total: ${total.toFixed(2)}`);
}

accBalance(["5.51",

"69.42",

"100",

"NoMoreMoney"])