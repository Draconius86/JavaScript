function fruitShop(input) {
    let monFri = new Map([
        ['banana', 2.50],
        ['apple', 1.20],
        ['orange', 0.85],
        ['grapefruit', 1.45],
        ['kiwi', 2.70],
        ['pineapple', 5.50],
        ['grapes', 3.85]
    ]);
    let satSun = new Map([
        ['banana', 2.70],
        ['apple', 1.25],
        ['orange', 0.90],
        ['grapefruit', 1.60],
        ['kiwi', 3.00],
        ['pineapple', 5.60],
        ['grapes', 4.20]
    ]);
    let fruitS = ['banana', 'apple', 'orange', 'grapefruit', 'kiwi', 'pineapple', 'grapes'];
    let workWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    let weekEnd = ['Saturday', 'Sunday'];
    let fruit = input[0];
    let day = input[1];
    let qty = Number(input[2]);
    if (workWeek.includes(`${day}`) && fruitS.includes(`${fruit}`)) {
        console.log((monFri.get(fruit) * qty).toFixed(2));
    } else if (weekEnd.includes(`${day}`) && fruitS.includes(`${fruit}`)){
        console.log((satSun.get(fruit) * qty).toFixed(2));
    } else {
        console.log('error');
    }
}

fruitShop(['beer', 'Tuesday', '2']);