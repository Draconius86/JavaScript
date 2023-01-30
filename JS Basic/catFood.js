function catFood(data) {
    let cats = Number(data[0]);
    let smallCats = 0;
    let bigCats = 0;
    let hugeCats = 0;
    let totalFood = 0;
    for (let i = 1; i <= cats; i++) {
        let foodPerCat = Number(data[i]);
        if (foodPerCat >= 300) {
            hugeCats++;
        } else if (foodPerCat >= 200) {
            bigCats++;
        } else {
            smallCats++;
        }
        totalFood += foodPerCat;
    }
    console.log(`Group 1: ${smallCats} cats.`);
    console.log(`Group 2: ${bigCats} cats.`);
    console.log(`Group 3: ${hugeCats} cats.`);
    let pricePerDay = totalFood / 1000 * 12.45;
    console.log(`Price for food per day: ${pricePerDay.toFixed(2)} lv.`);
}

catFood(["7",
"100",
"200",
"342",
"300",
"234",
"123",
"212"]);