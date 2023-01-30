function truckDriver(data) {
    var season = data[0];
    var kmPerMonth = Number(data[1]);
    var totalMoney = 0;
    
    if (kmPerMonth <= 5000) {
        if (season === "Spring" || season === "Autumn") {
            totalMoney = kmPerMonth * 0.75;
        } else if (season === "Summer") {
            totalMoney = kmPerMonth * 0.90;
        } else {
            totalMoney = kmPerMonth * 1.05;
        }
    } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
        if (season === "Spring" || season === "Autumn") {
            totalMoney = kmPerMonth * 0.95;
        } else if (season === "Summer") {
            totalMoney = kmPerMonth * 1.10;
        } else {
            totalMoney = kmPerMonth * 1.25;
        }
    } else {
        totalMoney = kmPerMonth * 1.45;
    }
    totalMoney = (totalMoney * 0.90) * 4;
    console.log(totalMoney.toFixed(2));
}
truckDriver(['Winter','4350'])
