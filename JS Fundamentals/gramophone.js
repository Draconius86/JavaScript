function gramophone(band, album, song) {
    let rotationTime = 2.5;
    let songTime = (album.length * band.length) * song.length / 2;
    let finalRotations = Math.ceil(songTime / rotationTime);
    console.log(`The plate was rotated ${finalRotations} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');