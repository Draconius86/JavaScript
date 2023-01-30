function touristShop(data) {
    let budget = Number(data[0]);
    let productPrice = 0;
    let totalSpentMoney = 0; 
    let countProduct = 0;
    for (let i = 1; i < data.length; i += 2) {
        let j = i + 1;
        productPrice = Number(data[j]);
        if (j % 6 === 0) {
            productPrice = productPrice / 2;
        }
        if (productPrice > budget) {
            let neededMoney = productPrice - budget;
            console.log(`You don't have enough money!`);
            console.log(`You need ${neededMoney.toFixed(2)} leva!`);
            break;
        } else if (data[i] === "Stop") {
            console.log(`You bought ${countProduct} products for ${totalSpentMoney.toFixed(2)} leva.`);
            break;
        }
        budget -= productPrice;
        totalSpentMoney += productPrice;
        countProduct++;
    }
}

touristShop(["54",
"Thermal underwear",
"24",
"Sunscreen",
"45"]);