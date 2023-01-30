function movieRatings(data) {
    let movieCount = Number(data[0]);
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;
    let minMovie = "";
    let maxMovie = "";
    let avrgRating = 0;
    let totalMovieRating = 0;
    for (i = 1; i < movieCount * 2 + 1; i += 2) {
        let movieName = data[i];
        let movieRating = Number(data[i + 1]);
        if (movieRating > max) {
            max = movieRating;
            maxMovie = movieName;
        }

        if (movieRating < min) {
            min = movieRating;
            minMovie = movieName;
        }

        totalMovieRating += movieRating;
    }
    avrgRating = totalMovieRating / movieCount;
    console.log(`${maxMovie} is with highest rating: ${max.toFixed(1)}`);
    console.log(`${minMovie} is with lowest rating: ${min.toFixed(1)}`);
    console.log(`Average rating: ${avrgRating.toFixed(1)}`);
}

movieRatings(["5",
"A Star is Born",
"7.8",
"Creed 2",
"7.3",
"Mary Poppins",
"7.2",
"Vice",
"7.2",
"Captain Marvel",
"7.1"]);