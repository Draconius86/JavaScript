function monthlyBills(data) {
    let totalMonths = Number(data[0]);
    let totalWater = 0;
    let totalNet = 0;
    let totalPower = 0;
    let totalOther = 0;
    let average = 0;
    for (let i = 1; i <= totalMonths; i++) {
        let pow = Number(data[i]);
        totalPower += pow;
        totalWater += 20;
        totalNet += 15;
        totalOther += (pow + 15 + 20) * 1.2; }
    average = (totalNet + totalOther + totalPower + totalWater) / totalMonths;
    console.log(`Electricity: ${totalPower.toFixed(2)} lv`);
    console.log(`Water: ${totalWater.toFixed(2)} lv`);
    console.log(`Internet: ${totalNet.toFixed(2)} lv`);
    console.log(`Other: ${totalOther.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`); }

monthlyBills(['5','68.63','89.25','132.53','93.53','63.22'])