function poolParty(input) {
    var peopleCount = Number(input[0]);
    var entryTax = Number(input[1]);
    var deckChairPrice = Number(input[2]);
    var umbrellaPrice = Number(input[3]);
    var totalEntryTax = peopleCount * entryTax;
    var totalUmbrellas = Math.ceil(peopleCount / 2);
    var totalUmbrellaTax = totalUmbrellas * umbrellaPrice;
    var deckChairPeople = Math.ceil(peopleCount * 3 / 4);
    var deckChairTax = deckChairPeople * deckChairPrice;
    var grandTotal = (deckChairTax + totalEntryTax + totalUmbrellaTax).toFixed(2);
    console.log(`${grandTotal} lv.`);
}

poolParty([21,5.5,4.4,6.2]);
