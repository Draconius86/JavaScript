function townShop(input) {
    let sofia = new Map([
        ['coffee', 0.50],
        ['water', 0.80],
        ['beer', 1.20],
        ['sweets', 1.45],
        ['peanuts', 1.60]
    ]);
    let plovdiv = new Map([
        ['coffee', 0.40],
        ['water', 0.70],
        ['beer', 1.15],
        ['sweets', 1.30],
        ['peanuts', 1.50]
    ]);
    let varna = new Map([
        ['coffee', 0.45],
        ['water', 0.70],
        ['beer', 1.10],
        ['sweets', 1.35],
        ['peanuts', 1.55]
    ]);

    let city = input[1];
    let qty = Number(input[2]);

    if(city === "Sofia") {
        console.log(sofia.get(input[0]) * qty);
    } else if (city === "Plovdiv") {
        console.log(plovdiv.get(input[0]) * qty);
    } else {
        console.log(varna.get(input[0]) * qty);
    }
}

townShop(['sweets', 'Sofia', '2.23']);