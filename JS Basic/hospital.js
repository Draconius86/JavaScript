function hospital(data) {
    let days = Number(data[0]);
    let docCount = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;
    for (i = 1; i <= days; i++) {
        if (data[i] > docCount) {
            treatedPatients += docCount;
            untreatedPatients = untreatedPatients + (data[i] - docCount);
        } else {
            treatedPatients += Number(data[i]);
            untreatedPatients = untreatedPatients;
        }
        // console.log(`Day ${i} - doctors counted - ${docCount}`);
        if (untreatedPatients > treatedPatients && i % 3 === 2) {
            docCount++;
        } else {
            docCount = docCount;
        }
        // console.log(`Day ${i} - treated patients - ${treatedPatients}`);
        // console.log(`Day ${i} - untreated patients - ${untreatedPatients}`);
    
    }
console.log(`Treated patients: ${treatedPatients}.`);
console.log(`Untreated patients: ${untreatedPatients}.`);
}

hospital(['6','25','25','25','25','25','2'])