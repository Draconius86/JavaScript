function cinemaVoucher(data) {
    let voucherValue = Number(data[0]);
    let i = 1;
    let purchasePrice = 0;
    let purchaseTicket = 0;
    let purchaseOther = 0;
    while (data[i] !== "End") {
        let firstChar = data[i].charCodeAt(0);
        let secondChar = data[i].charCodeAt(1);

        if (data[i].length > 8) {
            purchasePrice = firstChar + secondChar;
            if (voucherValue < purchasePrice) {
                break;
            } else { 
                voucherValue -= purchasePrice;
                purchaseTicket++;
            }
        } else {
            purchasePrice = firstChar;
            if (voucherValue < purchasePrice) {
                break;
            } else { 
                voucherValue -= purchasePrice;
                purchaseOther++;
            }
        }
        i++;
    }
    console.log(purchaseTicket);
    console.log(purchaseOther);
}