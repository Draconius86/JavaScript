function vegOrFruit(input) {
    var fruit = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes'];
    var veggie = ['tomato', 'cucumber', 'pepper', 'carrot'];

    var vegOrFruit = input[0];

    if (fruit.includes(`${vegOrFruit}`)) {
        console.log("fruit");
    } else if (veggie.includes(`${vegOrFruit}`)) {
        console.log("vegetable");
    } else {
        console.log("unknown");
    }
}

vegOrFruit(['pepper']);