function gladExp(countLosses, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let sum = 0;
    let helmetBroken = false;
    let swordBroken = false;
    let shieldCounter = 0;

    for (let i = 1; i <= countLosses; i++) {

        if (i % 2 === 0) {
            helmetBroken = true;
            sum += helmetPrice;
        } else {
            helmetBroken = false;
        }

        if (i % 3 === 0) {
            swordBroken = true;
            sum += swordPrice;
        } else {
            swordBroken = false;
        }

        if ((helmetBroken) && (swordBroken)) {
            sum += shieldPrice;
            shieldCounter++;
        }

        if (shieldCounter == 2) {
            sum += armorPrice;
            shieldCounter = 0;
        }
    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}

gladExp(23,
    12.50,
    21.50,
    40,
    200
)