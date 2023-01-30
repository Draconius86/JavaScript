function agencyProfit(input) {
    
    var nameFlightCompany = input[0];
    var countAdultsTickets = Number(input[1])
    var countChildrenTickets = Number(input[2]);
    var priceAdultTicket = Number(input[3]);
    var priceServiceTax = Number(input[4]);

    var priceChildTicket = priceAdultTicket - (priceAdultTicket / 100) * 70;
    var priceAdultTicketWithTax = priceAdultTicket + priceServiceTax;
    var priceChildTicketWithTax = priceChildTicket + priceServiceTax;
    var totalAmountTickets = (countAdultsTickets * priceAdultTicketWithTax) + (countChildrenTickets * priceChildTicketWithTax);
    var profitForAgency = totalAmountTickets / 5;

    console.log(`The profit of your agency from ${nameFlightCompany} tickets is ${profitForAgency.toFixed(2)} lv.`);
}

agencyProfit(["WizzAir", 15,5,120,40])