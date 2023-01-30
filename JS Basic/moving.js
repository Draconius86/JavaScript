function moving(data) {
    let length = Number(data[0]);
    let width = Number(data[1]);
    let heigth = Number(data[2]);
    let totalVolume = length * width * heigth;
    let i = 3;
    while (data[i] !== "Done") {
        let countBoxes = Number(data[i]);
        totalVolume -= countBoxes;
        if (totalVolume < 0) {
            console.log(`No more free space! You need ${Math.abs(totalVolume)} Cubic meters more.`);
            break;
        }
        i++;
    }
    if (totalVolume >= 0) {
        console.log(`${totalVolume} Cubic meters left.`)
    }
}