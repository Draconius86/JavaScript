function multiplyByTwo(input) {
    for (i = 0; i < input.length; i++) {
        let num = Number(input[i]);
        if (num < 0) {
            console.log('Negative number!');
            break;
        } else {
        num *= 2;
        console.log(`Result: ${num.toFixed(2)}`);
        }
    }
}