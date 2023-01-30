function bonusPoints(data) {
    let number = Number(data[0]);
    let bonus = 0;
    
    if (number <= 100) {
        bonus = 5;
    } else if (number > 100 && number <= 1000) {
        bonus = number / 5;
    } else {
        bonus = number / 10;
    }
    if (number % 2 == 0) {
        bonus += 1;
    } else if (number % 10 == 5) {
        bonus += 2;
    }

    number = number + bonus;

    console.log(bonus);
    console.log(number);

}

bonusPoints(['20']);