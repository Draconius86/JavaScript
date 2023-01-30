function sumAndMulti(data) {
    let digit = Number(data[0]);

    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 9; d >= c; d--) {
                    let summary = a + b + c + d;
                    let multi = a * b * c * d;

                    if (summary === multi) {
                        if (digit % 10 === 5) {
                        console.log(`${a}${b}${c}${d}`); return;
                    }
                    }
                    
                    if (Math.floor(multi / summary) === 3) {
                        if (digit % 3 === 0) {
                            if (d > 0) {
                                console.log(`${d}${c}${b}${a}`); return;
                            }
                        }
                        
                    }
                }
            }
        }
    }

   console.log("Nothing found"); 

}
sumAndMulti(["123"])