function footballLeague(data) {
    let maxPlaces = Number(data[0]);
    let totalFans = Number(data[1]);
    let aFans = 0;
    let bFans = 0;
    let vFans = 0;
    let gFans = 0;

    for (let i = 2; i <= totalFans + 1; i++) {
        if (data[i] === "A") {
            aFans += 1;
        } else if (data[i] === "B") {
            bFans += 1;
        } else if (data[i] === "V") {
            vFans += 1;
        } else {
            gFans += 1;
        }
    }
    aFans = aFans / totalFans * 100;
    bFans = bFans / totalFans * 100;
    vFans = vFans / totalFans * 100;
    gFans = gFans / totalFans * 100;

    let prcnt = totalFans / maxPlaces * 100;

     console.log(`${aFans.toFixed(2)}%`);
     console.log(`${bFans.toFixed(2)}%`);
     console.log(`${vFans.toFixed(2)}%`);
     console.log(`${gFans.toFixed(2)}%`);
     console.log(`${prcnt.toFixed(2)}%`);
}