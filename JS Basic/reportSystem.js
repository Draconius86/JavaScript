function reportSystem(data) {
    let neededMoney = Number(data[0]);
    let i = 1;
    let money = 0;
    let totalCash = 0;
    let totalCC = 0;
    let avrgCash = 0;
    let avrgCC = 0;
    let countCash = 0;
    let countCC = 0;
    let totalMoney = 0;
    while (data[i] !== "End") {
        money = Number(data[i]);
        if (i % 2 === 0) { // CC payment check
            if (money >= 10) {
                countCC++;
                totalCC += money;
                console.log(`Product sold!`);
            } else {
                console.log(`Error in transaction!`)
            }
        } else { // Cash payment check
            if (money <= 100) {
                countCash++;
                totalCash += money;
                console.log(`Product sold!`);
            } else {
                console.log(`Error in transaction!`);
            }
        }
        totalMoney = totalCash + totalCC;
        if (totalMoney >= neededMoney) {
            break;
        }
        i++;
    }
        if (totalMoney >= neededMoney) {
            avrgCC = totalCC / countCC;
            avrgCash = totalCash / countCash;
            console.log(`Average CS: ${avrgCash.toFixed(2)}`);
            console.log(`Average CC: ${avrgCC.toFixed(2)}`);
        } else {
            console.log(`Failed to collect required money for charity.`);
        }
}
reportSystem(['500',
    '120',
    '8',
    '63',
    '256',
    '78',
    '317'
])