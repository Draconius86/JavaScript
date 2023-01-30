function personalTitles(data) {
    var age = Number(data[0]);
    var gender = data[1];

    if (gender == 'f') {
        if (age >= 16) {
            console.log('Ms.');
        } else {
            console.log('Miss');
        }
    } else {
        if (age >= 16) {
            console.log('Mr.');
        } else {
            console.log('Master');
        }
    }
}

personalTitles(['12', 'f']);