function examPreparation(data) {
    let badNotes = Number(data[0]);
    let i = 1;
    let taskName = '';
    let taskNote = 0;
    let unsatNotes = 0;
    let sumNotes = 0;
    let countTasks = 0;
    while (data[i] !== "Enough") {
        taskName = data[i];
        taskNote = Number(data[i + 1]);
        if (unsatNotes == badNotes) {
            console.log(`You need a break, ${unsatNotes} poor grades.`);
            break;
        }
        if (taskNote <= 4) {
            unsatNotes++;
            sumNotes += taskNote;
            countTasks++;
        } else {
            sumNotes += taskNote;
            countTasks++;
        }
        i += 2;
    }
    if (unsatNotes < badNotes) {
        let avrgScore = sumNotes / countTasks;
        console.log(`Average score: ${avrgScore.toFixed(2)}`);
        console.log(`Number of problems: ${countTasks}`);
        console.log(`Last problem: ${taskName}`);
    }
}

examPreparation(["2",

"Income",

"3",

"Game Info",

"6",

"Best Player",

"4"])