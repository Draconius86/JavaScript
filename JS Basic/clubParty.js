function club(input) {
    let wantPrice = Number(input[0]);   //500
    let name = input[1];                //Bellini
    ; // 6
 
    let coctailPrice = 0;
    let sum = 0;
    let totalPrice = 0;
 
    for (let i = 1; i < (input.length - 1); i += 2) {
        let name = input[i];
        let countDrinks = Number(input[i + 1])
        coctailPrice = name.length;
        sum = coctailPrice * countDrinks
        if (sum % 2 != 0) {
            sum = sum * 0.75;
        }
        totalPrice += sum
    }
 
    
    let needMoney = wantPrice - totalPrice;
 
    comand = "Party!"
    if (input.includes(comand) && sum < wantPrice) {
        console.log(`We need ${needMoney.toFixed(2)} leva more.`)
    }
    else {
        console.log("Target acquired.")
    }
 
    console.log(`Club income - ${totalPrice.toFixed(2)} leva.`)
}
club(["100",
"Sidecar",
"7",
"Mojito",
"5",
"White Russian",
"10",
"Party!"])