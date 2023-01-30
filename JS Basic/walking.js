function walking(data) {
    let goal = 10000;
    let i = 0;
    let steps = 0;
    let totalSteps = 0;
    while (data[i] !== "Going home") {
        steps = Number(data[i]);
        totalSteps += steps;
        i++;
        if (totalSteps >= goal) {
            let extrasteps = totalSteps - goal;
            console.log(`Goal reached! Good job!`);
            console.log(`${extrasteps} steps over the goal!`);
            break;
        }
    }
    if (totalSteps < goal && data[i] === "Going home") {
        totalSteps = totalSteps + Number(data[i + 1]);
        if (totalSteps >= goal) {
            let extrasteps = totalSteps - goal;
            console.log(`Goal reached! Good job!`);
            console.log(`${extrasteps} steps over the goal!`);
        } else {
            let extrasteps = goal - totalSteps;
            console.log(`${extrasteps} more steps to reach goal.`);
        }
    }
}

walking(["1000",
    "1500",
    "2000",
    "Going home",
    "6500"]);