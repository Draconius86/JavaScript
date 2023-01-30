function petFood(data) {
    let days = Number(data[0]);
    let totalFood = Number(data[1]);
    let catFood = 0;
    let dogFood = 0;
    let dayCounter = 0;
    let biscuits = 0;
    let totalCatFood = 0;
    let totalDogFood = 0;
    for (i = 2; i < days * 2 + 2; i += 2) {
        dayCounter++;
        dogFood = Number(data[i]);
        catFood = Number(data[i + 1]);
        totalDogFood += dogFood;
        totalCatFood += catFood;
        if (dayCounter % 3 === 0) {
            biscuits += (dogFood + catFood) * 0.1;
        }
    }
    let totalEatenFood = totalCatFood + totalDogFood;
    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    let avrgEatenFood = (totalCatFood + totalDogFood) / totalFood * 100;
    console.log(`${avrgEatenFood.toFixed(2)}% of the food has been eaten.`);
    let avrgEatenDogFood = totalDogFood / totalEatenFood * 100;
    let avrgEatenCatFood = totalCatFood / totalEatenFood * 100;
    console.log(`${avrgEatenDogFood.toFixed(2)}% eaten from the dog.`);
    console.log(`${avrgEatenCatFood.toFixed(2)}% eaten from the cat.`);
}