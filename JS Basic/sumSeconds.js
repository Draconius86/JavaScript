function sumSeconds(input) {
    var first = Number(input[0]);
    var second = Number(input[1]);
    var third = Number(input[2]);
    var sum = first + second + third;
    var minutes = Math.floor(sum / 60);
    var seconds = sum % 60;
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }     
}

sumSeconds(["35", "45", "44"]);