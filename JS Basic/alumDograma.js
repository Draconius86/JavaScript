function alumDogramaOrder(input) {
    
    var countDograma = Number(input[0]);
    var typeDograma = input[1];
    var typeDelivery = input[2];
    var sumDograma = 0;
    var priceSingleDograma = 0;

    if (countDograma < 10) {
        console.log("Invalid order");
    }
    else if (typeDograma == "90X130" && countDograma > 30 && countDograma <= 60) {
         priceSingleDograma = 110 - ((110 / 100) * 5);
         sumDograma = priceSingleDograma * countDograma;
    }
    else if (typeDograma == "90X130" && countDograma > 60) {
         priceSingleDograma = 110 - ((110 / 100) * 8);
         sumDograma = priceSingleDograma * countDograma;
    }
    else if (typeDograma == "90X130" && countDograma >= 10 && countDograma <= 30) {
         priceSingleDograma = 110;
         sumDograma = priceSingleDograma * countDograma;
    }
    else if (typeDograma == "100X150" && countDograma > 40 && countDograma <= 80) {
         priceSingleDograma = 140 - ((140 / 100) * 6);
         sumDograma = priceSingleDograma * countDograma;
    }
    else if (typeDograma == "100X150" && countDograma > 80) {
         priceSingleDograma = 140 - ((140 / 100) * 10);
         sumDograma = priceSingleDograma * countDograma;
    }
    else if (typeDograma == "100X150" && countDograma >= 10 && countDograma <= 20) {
         priceSingleDograma = 140;
         sumDograma = priceSingleDograma * countDograma;
    }
    else if (typeDograma == "130X180" && countDograma > 20 && countDograma <= 50) {
         priceSingleDograma = 190 - ((190 / 100) * 7);
         sumDograma = priceSingleDograma * countDograma;
    }
    else if (typeDograma == "130X180" && countDograma > 50) {
         priceSingleDograma = 190 - ((190 / 100) * 12);
         sumDograma = priceSingleDograma * countDograma;
    }
    else if (typeDograma == "130X180" && countDograma >= 10 && countDograma <= 25) {
         priceSingleDograma = 190;
         sumDograma = priceSingleDograma * countDograma;
    }    
    else if (typeDograma == "200X300" && countDograma > 25 && countDograma <= 50) {
         priceSingleDograma = 250 - ((250 / 100) * 9);
         sumDograma = priceSingleDograma * countDograma;
    }
    else if (typeDograma == "200X300" && countDograma > 50) {
         priceSingleDograma = 250 - ((250 / 100) * 14);
         sumDograma = priceSingleDograma * countDograma;
    }
    else {
         priceSingleDograma = 250;
         sumDograma = priceSingleDograma * countDograma;
    }

    if (typeDelivery == "With delivery" && countDograma >=10) {
        sumDograma = sumDograma + 60;
    }

    if (countDograma > 99) {
         sumDograma = sumDograma - ((sumDograma / 100) * 4);
    }
    
    if (sumDograma > 0) {
    console.log(`${sumDograma.toFixed(2)} BGN`);
    }
}

alumDogramaOrder(["40", "90X130", "Without delivery"]);