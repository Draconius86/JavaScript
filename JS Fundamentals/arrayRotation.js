function arrayRotation(arr, num) {
    let i = 0;
    while (i < num) {
        arr.push(arr.shift());
        i++;
    }
    console.log(arr.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2);