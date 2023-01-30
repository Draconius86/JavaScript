function luggage(input) {

    var luggagePriceOver20kg = Number(input[0]);
    var luggageWeight = Number(input[1]);
    var daysBeforeFlight = Number(input[2]);
    var luggageCount = Number(input[3]);
    var luggagePrice = 0;

    if (luggageWeight < 10) {
        var luggagePrice = luggagePriceOver20kg / 5;
    }
    else if (luggageWeight >= 10 && luggageWeight <= 20) {
        var luggagePrice = luggagePriceOver20kg / 2;
    } else {
        var luggagePrice = luggagePriceOver20kg; 
    }

    if (daysBeforeFlight > 30) {
        var newLuggagePrice = luggagePrice + ((luggagePrice / 100) * 10);
    }
    else if (daysBeforeFlight >= 7 && daysBeforeFlight <= 30) {
        var newLuggagePrice = luggagePrice + ((luggagePrice / 100) * 15);
    } else {
        var newLuggagePrice = luggagePrice + ((luggagePrice / 100) * 40);
    }

    var finalAmount = newLuggagePrice * luggageCount;

    console.log(`The total price of bags is: ${finalAmount.toFixed(2)} lv.`);

}

luggage([63.8,23,3,1]);