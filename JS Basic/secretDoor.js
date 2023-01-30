    function secretDoor(input) {
    let num1= Number(input[0]);
    let num2 = Number(input[1]);
    let num3 = Number(input[2]);
    let code = '';
    
    for(let x = 1; x <= num1; x++){
        if(x % 2 == 0){
            for(let y = 2; y<=num2; y++){
                let isPrime = true;
                for(let z = 2; z < y; z++){
                    if(y % z == 0){
                        isPrime = false;
                    }
                }
                if(isPrime){
                    for(let k = 1; k<=num3; k++){
                        if(k % 2 ==0){
                        console.log(`${x} ${y} ${k}`);
                        }
                    }
                }
                }
            }
        }
    }
    secretDoor([
        "3",
        "5",
        "5"
        ])