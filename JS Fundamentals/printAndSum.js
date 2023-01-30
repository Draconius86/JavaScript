function printAndSum(num1, num2) {
    let startNum = num1;
    let endNum = num2;
    let endString = [];
    let sum = 0;
    let finalString = []
    for (let i = startNum; i <= endNum; i++) {
        endString.push(i);
        sum += i;
    }
    finalString = endString.join(' ');
    console.log(finalString);
    console.log(`Sum: ${sum}`);
}

printAndSum(0, 26);