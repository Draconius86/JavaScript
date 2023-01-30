function rentAcar(data) {
    var budget = Number(data[0]);
    var season = data[1];
    var carType = "";
    var econList = {
        "Summer": { "Cabrio": budget*0.35 },
        "Winter": { "Jeep": budget*0.65 }
    };
    var compList = {
        "Summer": { "Cabrio": budget*0.45 },
        "Winter": { "Jeep": budget*0.80 }
    };
    var luxList = {
        "Summer": { "Jeep": budget*0.90 },
        "Winter": { "Jeep": budget*0.90 }
    };
    if (season === "Summer" && budget <= 500) {
        carType = "Cabrio";
    } else {
        carType = "Jeep";
    } 
    if (budget <= 100) {
        console.log(`Economy class`);
        console.log(`${carType} - ${(econList[season][carType]).toFixed(2)}`);
    } else if (budget > 100 && budget <= 500) {
        console.log(`Compact class`);
        console.log(`${carType} - ${(compList[season][carType]).toFixed(2)}`);
    } else {
        console.log(`Luxury class`);
        console.log(`${carType} - ${(luxList[season][carType]).toFixed(2)}`);
    }
}

rentAcar(['1010','Winter']);