function backToThePast(data) {
    let inheritMoney = Number(data[0]);
    let targetYear = Number(data[1]);
    let startYear = 1800;
    let age = 18

    for (let i = startYear; i <= targetYear; i++) {
        if (i % 2 === 0) {
            inheritMoney -= 12000;
        } else {
            inheritMoney = inheritMoney - 12000 - 50 * age;
        }
        age++;
    }

    if (inheritMoney >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${(Math.abs(inheritMoney).toFixed(2))} dollars left.`);
    } else {
        console.log(`He will need ${(Math.abs(inheritMoney)).toFixed(2)} dollars to survive.`);
    }
}

backToThePast(['50000','1802']);