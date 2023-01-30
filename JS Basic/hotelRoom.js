function hotelRoom(data) {
    var month = data[0];
    var countNights = Number(data[1]);

    if (month == "May" || month == "October") {
        var studioSum = countNights * 50;
        var apartSum = countNights * 65;        
    } else if (month == "June" || month == "September") {
        var studioSum = countNights * 75.20;
        var apartSum = countNights * 68.70;
    } else {
        var studioSum = countNights * 76;
        var apartSum = countNights * 77;
    }

    if ((countNights > 7 && countNights <= 14) && (month == "May" || month == "October")) {
        studioSum = studioSum - (studioSum * 5 / 100);
    } else if ((countNights > 14) && (month == "May" || month == "October")) {
        studioSum = studioSum - (studioSum * 30 / 100);
        apartSum = apartSum - (apartSum * 10 / 100);
    } else if ((countNights > 14) && (month == "June" || month == "September")) {
        studioSum = studioSum - (studioSum * 20 / 100);
        apartSum = apartSum - (apartSum * 10 / 100);
    } else if (countNights > 14) {
        apartSum = apartSum - (apartSum * 10 / 100);
    } else {}

    console.log(`Apartment: ${apartSum.toFixed(2)} lv.`);
    console.log(`Studio: ${studioSum.toFixed(2)} lv.`);
}

hotelRoom(['May', '3']);