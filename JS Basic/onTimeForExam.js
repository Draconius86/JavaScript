function onTimeForExam(input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivingHour = Number(input[2]);
    let arrivingMinute = Number(input[3]);
    let examTime = (examHour * 60) + examMinute;
    let arrivingTime = (arrivingHour * 60) + arrivingMinute;
    let timeDiffOnTime = examTime - arrivingTime;
    
    let finalHourOn = Math.floor(timeDiffOnTime / 60);
    let finalMinuteOn = timeDiffOnTime % 60;
    let timeDiffLate = arrivingTime - examTime;
    let finalHourLate = Math.floor(timeDiffLate / 60);
    let finalMinuteLate = timeDiffLate % 60;
 
    if (timeDiffOnTime === 0) {
        console.log(`On time`);
    }
 
    if (timeDiffOnTime <= 30 && timeDiffOnTime > 0) {
        console.log("On time");
        console.log(`${timeDiffOnTime} minutes before the start`);
    }
 
    if (timeDiffOnTime > 30 && timeDiffOnTime < 60) {
        console.log(`Early`);
        console.log(`${timeDiffOnTime} minutes before the start`);
    } else if (timeDiffOnTime >= 60) {
        console.log(`Early`);
        if (finalMinuteOn < 10) {
            console.log((`${finalHourOn}:0${finalMinuteOn} hours before the start`))  
        } else {
        console.log((`${finalHourOn}:${finalMinuteOn} hours before the start`));
        }
    }
    if (timeDiffLate > 0 && timeDiffLate < 60) {
        console.log(`Late`);
        console.log(`${timeDiffLate} minutes after the start`);
    } else if (timeDiffLate >= 60) {
        console.log(`Late`);
        if (finalMinuteLate < 10) {
            console.log((`${finalHourLate}:0${finalMinuteLate} hours after the start`))
        } else {
        console.log((`${finalHourLate}:${finalMinuteLate} hours after the start`));
        }
    
    }
}