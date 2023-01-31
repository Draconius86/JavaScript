function rotateArray(arr) {

    let rotation = Number(arr.pop());

    for (let i = 0; i < rotation; i++) {
        let element = arr[arr.length - 1];
        arr.pop(element);
        arr.unshift(element);
    }

    console.log(arr.join(" "));
}