function vacation(data) {
    let neededMoney = Number(data[0]);
    let startMoney = Number(data[1]);
    let days = 0;
    let i = 2;
    let spendDay = 0;
    let spendingDays = 0;
    while (startMoney < neededMoney) {
        let action = data[i];
        let actionMoney = Number(data[i + 1]);

        if (action === "save") {
            days++;
            startMoney = startMoney + actionMoney;
            i += 2;
            spendingDays = 0;
            spendDay = false;
        } else if (spendDay === true && action === "spend") {
            days++;
            spendingDays++;
            startMoney = startMoney - actionMoney;
            if (startMoney < 0) {
                startMoney = 0;
            } else {
                startMoney = startMoney;
            }
            spendDay = true;
            i += 2;
        } else {
            days++;
            spendingDays++;
            startMoney = startMoney - actionMoney;
            if (startMoney < 0) {
                startMoney = 0;
            } else {
                startMoney = startMoney;
            }
            spendDay = true;
            i += 2;
        }
        if (spendingDays == 5) {
            console.log (`You can't save the money.`);
            console.log(`${days}`);
            break;
        }
    }
    if (startMoney >= neededMoney) {
        console.log(`You saved the money for ${days} days.`)
    }
}

vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])
