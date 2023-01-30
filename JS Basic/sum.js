function sum(input) {
    let text = input[0];
    let a = input[1];
    let b = input[2];
    let summary = text + (a + b);
    console.log(summary);
}

sum(['The sum is: ', 2, 5]);