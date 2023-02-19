function huntingGames(arr) {
    let dni = Number(arr.shift());
    let igrachi = Number(arr.shift());
    let energia = Number(arr.shift());
    let vodaNaChovek = Number(arr.shift());
    let hranaNaChovek = Number(arr.shift());
    let obshtoVoda = vodaNaChovek * igrachi * dni;
    let obshtoHrana = hranaNaChovek * igrachi * dni;
 
 
    for (let i = 0; i < dni; i++) {
        energia -= +arr[i];
 
        if (energia <= 0) {
            console.log(`You will run out of energy. You will be left with ${(obshtoHrana).toFixed(2)} food and ${obshtoVoda.toFixed(2)} water.`);
            break;
        }
 
        if (i % 2 !== 0) {
            obshtoVoda *= 0.70;
            energia *= 1.05;
        }
        if ((i + 1) % 3 === 0) {
            obshtoHrana -= obshtoHrana / igrachi;
            energia *= 1.10;
        }
    }
 
    if (energia > 0) {
        console.log(`You are ready for the quest. You will be left with - ${energia.toFixed(2)} energy!`);
    }
}

huntingGames(["12",
"6",
"4430",
"9.8",
"5.5",
"620.3",
"840.2",
"960.1",
"220",
"340",
"674",
"365",
"345.5",
"212",
"412.12",
"258",
"496"])
