function invNum(input) {
    var num = Number(input[0]);
    var numInt = Number.isInteger(num);

    if (numInt === true && num >= 100 && num <= 200) {

    } else if (numInt === true && num == 0) {

    } else {
        console.log('invalid');
    }
}

invNum(['1.5']);