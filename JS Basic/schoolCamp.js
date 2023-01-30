function studentCamp(input) {
    
    let campSeason = input[0];
    let studentsSex = input[1];
    let studentsNum = Number(input[2]);
    let nightsNum = Number(input[3]);
 
    let campPriceList = {
        "girls": {
            "Price": {
                "Spring": 7.20,
                "Summer": 15.00,
                "Winter": 9.60
            },
            "Sport": {
                "Spring": "Athletics",
                "Summer": "Volleyball",
                "Winter": "Gymnastics"
            }
        },
        "boys": {
            "Price": {
                "Spring": 7.20,
                "Summer": 15.00,
                "Winter": 9.60
            },
            "Sport": {
                "Spring": "Tennis",
                "Summer": "Football",
                "Winter": "Judo"
            }
        },
        "mixed": {
            "Price": {
                "Spring": 9.50,
                "Summer": 20.00,
                "Winter": 10.00
            },
            "Sport": {
                "Spring": "Cycling",
                "Summer": "Swimming",
                "Winter": "Ski"
            }
        }
    }
 
    let priceTotal = nightsNum * (studentsNum * campPriceList[studentsSex]["Price"][campSeason]);
 
    if (studentsNum >= 50) {
        priceTotal *= 0.50;
    }
    if (studentsNum >= 20 && studentsNum < 50) {
        priceTotal *= 0.85;
    }
    if (studentsNum >= 10 && studentsNum < 20) {
        priceTotal *= 0.95;
    }
 
    let sportType = campPriceList[studentsSex]["Sport"][campSeason];
 
    console.log(`${sportType} ${priceTotal.toFixed(2)} lv.`);
}
 
studentCamp(["Spring", "mixed", "17", "14"]);