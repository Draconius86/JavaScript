function divideBigger(input) {
    var number1 = Number(input[0]);
    var number2 = Number(input[1]);
    if (number1 > number2) {
        console.log(number1);
    } else {
        console.log(number2);
    }
}

divideBigger(["2", "3"]);