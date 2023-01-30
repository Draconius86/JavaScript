function sortNumbers(a, b, c) {
    if ((a > b && a > c && b > c) || (a === b && a > c ) || (b === c && a > b)) {
        console.log(a);
        console.log(b);
        console.log(c);
    } else if ((a > b && a > c && b < c) || (a === c && a > b)) {
        console.log(a);
        console.log(c);
        console.log(b);
    } else if ((b > a && b > c && a < c) || (b === c && b > a)) {
        console.log(b);
        console.log(c);
        console.log(a);
    } else if ((b > a && b > c && a > c) || (a === c && b > a)) {
        console.log(b);
        console.log(a);
        console.log(c);
    } else if ((c > a && c > b && a > b) || (a === b && a < c)) {
        console.log(c);
        console.log(a);
        console.log(b);
    } else if ((c > a && c > b && a < b) || (a === b && a < c)) {
        console.log(c);
        console.log(b);
        console.log(a);
    } else {
        console.log(c);
        console.log(b);
        console.log(a);
    }
}

sortNumbers(3,3,3);