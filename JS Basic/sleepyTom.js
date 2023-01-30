function sleepyTom(data) {
    let freeDays = Number(data[0]);
    let workDays = 365 - freeDays;
    let playTimeWork = workDays * 63;
    let playTimeFree = freeDays * 127;

    let maxPlayTime = 30000;
    let totalPlayTime = playTimeFree + playTimeWork;

    if (totalPlayTime > maxPlayTime) {
        let extraPlayTime = totalPlayTime - maxPlayTime
        let hours = Math.floor(extraPlayTime / 60);
        let minutes = extraPlayTime % 60;
        console.log('Tom will run away');
        console.log(`${hours} hours and ${minutes} minutes more for play`);
    } else {
        let needPlayTime = maxPlayTime - totalPlayTime;
        let hours = Math.floor(needPlayTime / 60);
        let minutes = needPlayTime % 60;
        console.log('Tom sleeps well');
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    }
}

sleepyTom(['113']);