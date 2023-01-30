function fuelTank(data) {
    var fuelType = data[0];
    var fuelLtrs = Number(data[1]);
    var acceptedFuel = ['Diesel', 'Gasoline', 'Gas'];
    var checkedFuel = acceptedFuel.includes(fuelType);
    if (checkedFuel == false) {
        console.log(`Invalid fuel!`);
    } else if (fuelLtrs >= 25) {
        console.log(`You have enough ${fuelType.toLowerCase()}.`);
    } else {
        console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
    }
}

fuelTank(['GasБеер','25']);