function excursion(data) {
    let peopleCount = Number(data[0]);
    let nightsCount = Number(data[1]);
    let cardCount = Number(data[2]);
    let ticketsCount = Number(data[3]);
    let nightPrice = nightsCount * 20;
    let cardPrice = cardCount * 1.60;
    let ticketPrice = ticketsCount * 6;
    let sumPerPerson = nightPrice + cardPrice + ticketPrice;
    let totalSum = peopleCount * sumPerPerson;
    totalSum = totalSum * 1.25;

    console.log(totalSum.toFixed(2));
}