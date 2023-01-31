function addAndRemove(array) {

    let num = 0;
    let newArr = [];
    let empty = false;

    for (let i = 0; i < array.length; i++) {
        let command = array[i];
        if (command === "add") {
            num++;
            newArr.push(num);
            empty = false;
        } else {
            num++;
            newArr.pop();
            empty = true;
        }
    }

    if (empty) {
        console.log("Empty") 
    } else {
        console.log(newArr.join(" "));
    }
}