function shopping(input) {
    let budgetPeter = Number(input[0]);
    let countVideocards = Number(input[1]);
    let countCpu = Number(input[2]);
    let countRam = Number(input[3]);
 
    let videocardPrice = 250;
    let videocardTotalPrice = countVideocards * videocardPrice;
    console.log(videocardTotalPrice);
    let cpuPrice = videocardTotalPrice * 0.35;
    let totalCpuPrice = cpuPrice * countCpu;
    console.log(totalCpuPrice);
    let ramPrice = videocardTotalPrice * 0.10;
    let totalRamPrice = ramPrice * countRam;
    console.log(totalRamPrice)
    let totalPrice = videocardTotalPrice + totalCpuPrice + totalRamPrice;
    let diffPrice = Math.abs(budgetPeter - totalPrice);
 
    if (countVideocards > countCpu) {
        totalPrice = totalPrice - (totalPrice * 15 / 100);
    }
    if (budgetPeter >= totalPrice) {
        console.log(`You have ${diffPrice.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${diffPrice.toFixed(2)} leva more!`)
    }
 
 
}

shopping(['900', '2', '1', '3']);