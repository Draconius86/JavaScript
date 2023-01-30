function oldBooks(data) {
    let favBook = data[0];
    let i = 1;
    while (data[i] !== "No More Books") {
        let currentBook = data[i];
        if (currentBook === favBook) {
            console.log(`You checked ${i - 1} books and found it.`);
            favBook = true;
            break;
        }
        i++;
    }
    if (favBook !== true) {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${i - 1} books.`);
}
}

oldBooks(["The Spot",

"Hunger Games",

"Harry Potter",

"Torronto",

"Spotify",

"No More Books"]);