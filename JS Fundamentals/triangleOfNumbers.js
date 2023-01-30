function triangleOfNumbers(num) {
    let string = [];
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            if (i > 1) {
                string += `${i} `
            } else {
            string += i;
            }
        }
        string += "\n";
    }
    console.log(string);
}

triangleOfNumbers(5)