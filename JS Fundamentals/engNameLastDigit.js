function engNameLastDigit(num) {
        let numbersMap = new Map([
        ['1','one'],
        ['2','two'],
        ['3','three'],
        ['4','four'],
        ['5','five'],
        ['6','six'],
        ['7','seven'],
        ['8','eight'],
        ['9','nine'],
        ['0','zero']
    ]);
    let number = String(num);
    let digit = number.charAt(number.length-1);
    console.log(numbersMap.get(digit));
}

engNameLastDigit(519);