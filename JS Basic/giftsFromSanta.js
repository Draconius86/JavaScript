function giftsFromSanta(data) {
    for (i = Number(data[1]); i >= Number(data[0]); i--) {
        let currentNumber = i;
        if (currentNumber == Number(data[2])) {
            break;
        }
        if (currentNumber % 3 == 0 && currentNumber % 2 == 0) {
            console.log(currentNumber);
        }
    }
}

giftsFromSanta(['20','1000','36']);