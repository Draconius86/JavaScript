function sumDigits(num) {
    let num2string = num.toString();
    let sum = 0;
    for (let i = 0; i < num2string.length; i++) {
        let digit = Number(num2string[i]);
        sum += digit;
    }
    console.log(sum);
}

sumDigits(245678);