function lunchBreak(data) {
    let movieName = data[0];
    let timeEpisode = Number(data[1]);
    let timeBreak = Number(data[2]);

    let timeForMovie = timeBreak - (timeBreak / 8) - (timeBreak / 4);

    if (timeForMovie >= timeEpisode) {
        let timeLeft = Math.ceil(timeForMovie - timeEpisode);
        console.log(`You have enough time to watch ${movieName} and left with ${timeLeft} minutes free time.`)
    } else {
        let missingTime = Math.ceil(timeEpisode - timeForMovie);
        console.log(`You don't have enough time to watch ${movieName}, you need ${missingTime} more minutes.`)
    }
}

lunchBreak(['Game of Thrones', '48', '60']);