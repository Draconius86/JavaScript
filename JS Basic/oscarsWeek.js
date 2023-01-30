function oscarsWeek(data) {
    let movieMap = {
        "A Star Is Born": {
            "normal": 7.50,
            "luxury": 10.50,
            "ultra luxury": 13.50
          },
        "Bohemian Rhapsody": {
            "normal": 7.35,
            "luxury": 9.45,
            "ultra luxury": 12.75
          },
          "Green Book": {
            "normal": 8.15,
            "luxury": 10.25,
            "ultra luxury": 13.25
          },
          "The Favourite": {
            "normal": 8.75,
            "luxury": 11.55,
            "ultra luxury": 13.95
          }
    };

    let movieName = data[0];
    let hallType = data[1];
    let ticketsCount = Number(data[2]);

    let totalIncome = ticketsCount * (movieMap[movieName][hallType]);

    console.log(`${movieName} -> ${totalIncome.toFixed(2)} lv.`);
}

oscarsWeek(['Green Book','normal','63']);