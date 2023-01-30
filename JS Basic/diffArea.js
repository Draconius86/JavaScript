function diffArea(input) {
    var type = input[0];
    var sideA = Number(input[1]);
    var SideB = Number(input[2]);
    var map = new Map ([
        ['square', sideA*sideA],
        ['rectangle', sideA*SideB],
        ['circle', sideA*sideA*Math.PI],
        ['triangle', (sideA*SideB)/2]
    ]);
    console.log((Math.floor(map.get(type) * 1000) / 1000).toFixed(3));
}

diffArea(['rectangle', '7', '2.5']);