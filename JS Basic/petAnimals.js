function petAnimals(data) {
    var countDays = Number(data[0]);
    var totalFood = Number(data[1]);
    var catFootPerDay = Number(data[2]);
    var dogFoodPerDay = Number(data[3]);
    var turtleFoodPerDayGram = Number(data[4]);

    var turtleFoodPerDayKg = turtleFoodPerDayGram / 1000;

    var foodPerDay = catFootPerDay + dogFoodPerDay + turtleFoodPerDayKg;
    var actualFood = foodPerDay * countDays;

    if (totalFood >= actualFood) {
        var extraFood = Math.floor(totalFood - actualFood);
        console.log(`${extraFood} kilos of food left.`);
    } else {
        var missingFood = Math.ceil(actualFood - totalFood);
        console.log(`${missingFood} more kilos of food are needed.`);
    }
}

petAnimals(['2','10','1','1','1200']);