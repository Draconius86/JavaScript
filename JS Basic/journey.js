function journey(input){
    let budget = Number(input[0]);
    let season = input[1];
    
    let type = "";
    let destination = "";
    let price = 0;

if (budget <= 100){
    destination = "Bulgaria";
    if (season === "summer"){
        price = budget * 0.30;
        type = "Camp";
    }else {
        price = budget * 0.70;
        type = "Hotel";
    }
}
if (budget <=1000 && budget >100 ){
    destination = "Balkans";
    if (season === "summer"){
        price = budget * 0.40;
        type = "Camp";    
    }else {
        price = budget * 0.80;
        type = "Hotel"
    }
}
if (budget > 1000){
    destination = "Europe"
    price = budget * 0.90;
    type = "Hotel";
}

    console.log (`Somewhere in ${destination}`)
    console.log(`${type} - ${price.toFixed(2)}`);


}
journey(["312", "summer"]);