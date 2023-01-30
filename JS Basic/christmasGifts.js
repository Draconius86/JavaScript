function christmasGifts(data) {
    i = 0;
    let age = 0;
    let kids = 0;
    let adults = 0;
    while (data[i] !== "Christmas") {
        if (data[i] !== "Christmas") {
            age = Number(data[i]);
        }

        if (age <= 16) {
            kids++;
        } else {
            adults++;
        }

        i++;
    }
    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${kids}`);
    let moneyForToys = kids * 5;
    let moneyForSweaters = adults * 15;
    console.log(`Money for toys: ${moneyForToys}`);
    console.log(`Money for sweaters: ${moneyForSweaters}`);
}

christmasGifts(["16",
"20",
"46",
"12",
"8",
"20",
"49",
"Christmas"]);