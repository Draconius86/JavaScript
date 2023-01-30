function readText(data) {
    let i = 0;
    let text = data[i]
    i++;
    while (data[i] !== "Stop") {
        console.log (text);
        text = data[i];
        i++;
    }
}

readText(["Sofia", "Berlin", "Moscow", "Athens", "Madrid", "London", "Paris", "Stop", "AfterStop"])