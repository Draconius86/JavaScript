function movieMaking(data) {
    let movieBudget = Number(data[0]);
    let countStatist = Number(data[1]);
    let priceClothStatist = Number(data[2]);
    let totalPrice = 0;
    let priceDeco = movieBudget / 10;
    let moneyStatist = countStatist * priceClothStatist;
    if (countStatist > 150) { 
        moneyStatist = moneyStatist - (moneyStatist * 10 / 100);
        totalPrice = moneyStatist + priceDeco;
    } else {
        totalPrice = moneyStatist + priceDeco;
    }
    if (totalPrice > movieBudget) {
        let missingMoney = Math.abs(movieBudget - totalPrice); 
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${missingMoney.toFixed(2)} leva more.`);
    } else {
        let extraMoney = movieBudget - totalPrice; 
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${extraMoney.toFixed(2)} leva left.`);
    }
}

movieMaking(['20000', '120', '55.5']);