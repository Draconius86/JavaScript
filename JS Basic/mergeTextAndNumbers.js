function mergeTextAndNumbers(input) {
    let firstName = input[0];
    let lastName = input[1];
    let age = input[2];
    let str = firstName + " " + lastName + " @ " + age;
    console.log(str);
}

mergeTextAndNumbers(['Ivo', 'Petrov', 35]);