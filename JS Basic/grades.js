function grades(data) {
    let countStud = Number(data[0]);
    let totalScore = 0;
    let studSlab = 0;
    let studSreden = 0;
    let studDobar = 0;
    let studOtl = 0;
    let avrgNote = 0;
    let prcntSlab = 0;
    let prcntSreden = 0;
    let prcntDobar = 0;
    let prcntOtl = 0;
    for (let i = 1; i <= countStud; i++) {
        let note = Number(data[i]);
        totalScore += Number(data[i]);
        if (note < 3.00) {
            studSlab += 1;
        } else if (note >= 3.00 && note < 4.00) {
            studSreden += 1;
        } else if (note >= 4.00 && note < 5.00) {
            studDobar += 1;
        } else {
            studOtl += 1;
        }
    }
    avrgNote = totalScore / countStud;
    prcntSlab = studSlab / countStud * 100;
    prcntSreden = studSreden / countStud * 100;
    prcntDobar = studDobar / countStud * 100;
    prcntOtl = studOtl / countStud * 100;
    
    console.log(`Top students: ${prcntOtl.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${prcntDobar.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${prcntSreden.toFixed(2)}%`);
    console.log(`Fail: ${prcntSlab.toFixed(2)}%`);
    console.log(`Average: ${avrgNote.toFixed(2)}`);
}

grades(['10','3.00','2.99','5.68','3.01','4','4','6.00','4.50','2.44','5'])
