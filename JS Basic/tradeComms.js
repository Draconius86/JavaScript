function tradeComms(data) {
    var city = data[0];
    var cityList = ['Sofia','Varna','Plovdiv'];
    var sum = Number(data[1]);
    
    if (sum >= 0 && sum <= 500) {
        var sofiaComm = 5 / 100;
        var varnaComm = 4.5 / 100;
        var plovdivComm = 5.5 / 100;
    } else if (sum > 500 && sum <= 1000) {
        var sofiaComm = 7 / 100;
        var varnaComm = 7.5 / 100;
        var plovdivComm = 8 / 100;
    } else if (sum > 1000 && sum <= 10000) {
        var sofiaComm = 8 / 100;
        var varnaComm = 10 / 100;
        var plovdivComm = 12 / 100;
    } else {
        var sofiaComm = 12 / 100;
        var varnaComm = 13 / 100;
        var plovdivComm = 14.5 / 100;
    }

    cityCheck = cityList.includes(city);
    
    if (sum < 0 || cityCheck == false) {
        console.log('error');
    } else if (city === "Sofia") {
        sum = sum * sofiaComm;
        console.log(sum.toFixed(2));
    } else if (city === "Varna") {
        sum = sum * varnaComm;
        console.log(sum.toFixed(2));
    } else {
        sum = sum * plovdivComm;
        console.log(sum.toFixed(2));
    }
}

tradeComms(["Sofia","1500"]);