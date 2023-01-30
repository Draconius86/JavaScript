function dishwasher(data) {
    let bottles = Number(data[0]);
    let i = 1;
    let plates = 0;
    let pots = 0;
    let totalDetergent = bottles * 750;
    let potsDetergent = 0;
    let platesDetergent = 0;
    let usedDetergent = 0;
    while (data[i] !== "End") {
        let washCount = Number(data[i]);
        if (i % 3 === 0) {
            potsDetergent = washCount * 15;
            usedDetergent = usedDetergent + potsDetergent;
            pots = pots + washCount;
        } else {
            platesDetergent = washCount * 5;
            usedDetergent = usedDetergent + platesDetergent;
            plates = plates + washCount;
        }
        if (usedDetergent > totalDetergent) {
            let neededDetergent = usedDetergent - totalDetergent;
            console.log(`Not enough detergent, ${neededDetergent} ml. more necessary!`);
            break;
        }
        i++;
    }
    if (usedDetergent <= totalDetergent) {
        let extraDetergent = totalDetergent - usedDetergent;
        console.log(`Detergent was enough!`);
        console.log(`${plates} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${extraDetergent} ml.`);
    }
}

dishwasher(["1","10","15","10","12","13","30"]);