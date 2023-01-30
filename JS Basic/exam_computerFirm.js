function computerFirm(input) {
    let pcs = Number(input[0]);
    let sold = 0;
    let rate = 0;
    let firstDigit = 0;
    let secondDigit = 0;
    let avrgRate = 0;
    let totalRate = 0;
    let totalSold = 0;

    for (let i = 1; i <= pcs; i++) {
        rate = input[i].charAt(2);
        firstDigit = input[i].charAt(0);
        secondDigit = input[i].charAt(1);
        sold = firstDigit + secondDigit;
        sold = Number(sold);

        switch (rate) {
            case "2": sold = 0; break;
            case "3": sold /= 2; break;
            case "4": sold *= 0.70; break;
            case "5": sold *= 0.85; break;
            case "6": sold = sold; break;
        }
        rate = Number(rate);
        totalRate += rate;
        totalSold += sold
    }
    avrgRate = (totalRate / pcs).toFixed(2);

    console.log(`${totalSold.toFixed(2)}`);
    console.log(avrgRate);

}
computerFirm(["5",
"122",
"156",
"202",
"214",
"185"])
