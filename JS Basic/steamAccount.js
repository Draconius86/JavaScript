function steamAccount(array) {

    let games = array[0].split(" ");
    let j = 1;
    let indexOfGame;

    while (j < array.length - 1) {
        for (let i = 1; i < array.length - 1; i++) {
            let element = array[i].split(" ");
            let operation = element[0];
            let game = element[1];

            switch (operation) {
                case "Install":
                    if (!games.includes(game)) {
                        games.push(game);
                    }
                    break;
                case "Uninstall":
                    if (games.includes(game)) {
                        indexOfGame = games.indexOf(game);
                        games.splice(indexOfGame, 1);
                    }
                    break;
                case "Update":
                    if (games.includes(game)) {
                        indexOfGame = games.indexOf(game);
                        let updated = games.splice(indexOfGame, 1); // diablo
                        games.push(updated[0]);
                    }
                    break;
                case "Expansion":
                    let expansion = game.split("-");
                    let gameFromExp = expansion[0];
                    if (games.includes(gameFromExp)) {
                        indexOfGame = games.indexOf(gameFromExp);
                        let newIndex = indexOfGame + 1;
                        let newExp = expansion.join(":");
                        games.splice(newIndex, 0, newExp);
                    }
            }
            j++;
        }
    }
    console.log(games.join(" "));
}