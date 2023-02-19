function chatLogger(arr) {
    let j = 0;
    let chat = [];
    while (arr[j] !== "end") {
        let element = arr[j].split(' ');
        let command = element[0];
        switch (command) {
            case "Chat":
                chat.push(element[1]);
                break;
            case "Delete":
                if (chat.includes(element[1])) {
                    chat.splice(chat.indexOf(element[1]), 1);
                }
                break;
            case "Edit":
                if (chat.includes(element[1])) {
                    chat.splice(chat.indexOf(element[1]), 1, element[2]);
                }
                break;
            case "Pin":
                if (chat.includes(element[1])) {
                    let pin = chat.splice(chat.indexOf(element[1]), 1);
                    chat.push(pin);
                }
                break;
            case "Spam":
                for (let i = 1; i < element.length; i++) {
                    let spam = element[i];
                    chat.push(spam);
                }
                break;
        }
        j++;
    }
    console.log(chat.join("\n"));
}

// chatLogger(["Chat Hello", "Chat darling", "Edit darling Darling", "Spam how are you", "Delete Darling", "end"]);

// chatLogger(["Chat Hello","Delete John","Pin Hi","end"]);

chatLogger(["Chat John", "Spam Let's go to the zoo", "Edit zoo cinema", "Chat tonight", "Pin John", "end"]);