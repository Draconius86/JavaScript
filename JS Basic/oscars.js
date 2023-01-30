function oscars(input) {
    let actorName = input[0];
    let startingPoints = Number(input[1]);
    let juryCount = Number(input[2]);
    let juryName = "";
    let juryPoints = 0;
    let totalCount = juryCount * 2 + 3;
    let sum = 0;
    let neededPoints = 1250.5;
 
    for (let i = 3; i < totalCount; i+=2) {
        juryName = input[i].length;
        let n = i + 1;
        juryPoints = (input[n] * juryName) / 2;
        sum += juryPoints;
        if (sum + startingPoints >= neededPoints) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${(sum + startingPoints).toFixed(1)}!`);
            break;
        }   
    }
    if (sum + startingPoints < neededPoints) {
        console.log(`Sorry, ${actorName} you need ${(neededPoints - (sum + startingPoints)).toFixed(1)} more!`);
    }
}

oscars(["Zahari Baharov",

"205",

"4",

"Johnny Depp",

"45",

"Will Smith",

"29",

"Jet Lee",

"10",

"Matthew Mcconaughey",

"39"]);