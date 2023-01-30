function cinema(data) {
    var prices = new Map ([
        ['Premiere', 12.00],
        ['Normal', 7.50],
        ['Discount', 5.00]
    ]);
    var type = data[0];
    var rows = Number(data[1]);
    var columns = Number(data[2]);   
    console.log(`${(prices.get(type) * rows * columns).toFixed(2)} leva`);
}

cinema(['Premiere', '10', '12']);