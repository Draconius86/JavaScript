function cake(data) {
    let length = Number(data[0]);
    let width = Number(data[1]);
    let totalPieces = length * width;
    let i = 2;
    while (data[i] !== "STOP") {
        let takenPieces = Number(data[i]);
        totalPieces -= takenPieces;
        if (totalPieces < 0) {
            console.log(`No more cake left! You need ${Math.abs(totalPieces)} pieces more.`);
            break;
        }
        i++;
    }
    if (totalPieces >= 0) {
        console.log(`${totalPieces} pieces are left.`)
    }
}

cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"]);