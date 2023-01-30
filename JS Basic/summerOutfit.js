function summerOutfit(data) {
    var temp = Number (data[0]);
    var time =  data[1];
    var outfit = 0;
    var shoes = 0;
    if (temp >= 10 && temp <= 18) {
        if (time === "Morning") {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    } else if (temp > 18 && temp <= 24) {
        if (time === "Afternoon") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    } else {
        if (time === "Morning") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (time === "Afternoon") {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        } else {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }
    console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
}

summerOutfit(['16','Morning']);