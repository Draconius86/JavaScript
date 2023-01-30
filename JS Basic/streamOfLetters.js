function streamOfLetters(data) {
    let i = 0;
    let symbol = data[i];
    let finalWord = "";
    let specLetterC = false;
    let specLetterO = false;
    let specLetterN = false;
    let word = "";
    let validLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    while (symbol !== "End") {
        if ((validLetters.includes(symbol))) {
            switch (symbol) {
                case "c":
                    if (specLetterC) {
                        word += symbol;
                    } else {
                        specLetterC = true;
                    }
                    break;
                case "o":
                    if (specLetterO) {
                        word += symbol;
                    } else {
                        specLetterO = true;
                    }
                    break;
                case "n":
                    if (specLetterN) {
                        word += symbol;
                    } else {
                        specLetterN = true;
                    }
                    break;
                default:
                    word += symbol;
                    break;
            }
        }
        if (specLetterC && specLetterO && specLetterN) {
            finalWord += word + " ";
            specLetterC = false;
            specLetterO = false;
            specLetterN = false;
            word = "";
        }

        i++;
        symbol = data[i];
    }
    console.log(finalWord);
}