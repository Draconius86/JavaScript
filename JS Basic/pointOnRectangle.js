function pointOnRectangle(data) {
    var x1 = Number(data[0]);
    var y1 = Number(data[1]);
    var x2 = Number(data[2]);
    var y2 = Number(data[3]);
    var x = Number(data[4]);
    var y = Number(data[5]);

    if (((x == x1 || x == x2) && y1 <= y && y <= y2) || ((y == y1 || y == y2) && x1 <= x && x <= x2) ) {
        console.log(`Border`);
    } else {
        console.log(`Inside / Outside`);
    }
}
pointOnRectangle(['2','-3','12','3','8','1']);