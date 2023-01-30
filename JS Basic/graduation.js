function graduation(data) {
    let name = data[0];
    let i = 1;
    let grade = 0;
    let totalGrade = 0;
    let fail = 0;
    let avrgGrade = 0;
    // console.log(data.length);
    while (i < data.length) {
        grade = Number(data[i]);
            if (grade < 4) {
            fail++;
            totalGrade += grade;
        } else {
            totalGrade += grade; 
        }
        if (fail > 1) {
            console.log(`${name} has been excluded at ${i - 1} grade`)
            break;
        } else {
        avrgGrade = totalGrade / i
        i++;
    }
}
    if (fail <= 1) {
        console.log(`${name} graduated. Average grade: ${avrgGrade.toFixed(2)}`);
    }
}

graduation(["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"])