function hairSalon(data) {
    let dailyTarget = Number(data[0]);
    let hairMap = {
        "haircut": {
            "mens": 15,
            "ladies": 20,
            "kids": 10
        },
        "color": {
            "touch up": 20,
            "full color": 30
        }
    };
    let i = 1;
    let totalIncome = 0;
    while (data[i] !== "closed") {
        let proc = data[i];
        let type = data[i + 1];
        let procIncome = hairMap[proc][type];

        totalIncome += procIncome;

        if (totalIncome >= dailyTarget) {
            console.log(`You have reached your target for the day!`);
            break;
        }

        i += 2;
    }
    if (totalIncome < dailyTarget) {
        let neededMoney = dailyTarget - totalIncome;
        console.log(`Target not reached! You need ${neededMoney}lv. more.`);
        console.log(`Earned money: ${totalIncome}lv.`);
    } else {
        console.log(`Earned money: ${totalIncome}lv.`);
    }
}

hairSalon(["300",
"haircut",
"ladies",
"haircut",
"kids",
"color",
"touch up",
"closed"])