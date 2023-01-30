function amazingNumbers(number) {
    number = number.toString();
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i]);
    }
    let res = sum.toString().includes('9');
    if (res === true) {
        console.log(`${number} Amazing? True`);
    } else {
        console.log(`${number} Amazing? False`);
    }
}

amazingNumbers(1233)