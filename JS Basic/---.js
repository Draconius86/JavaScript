function solve(input){
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let thirdNum = Number(input[2]);
    let unicPin = ''
     
    for (let i = 1; i <= firstNum; i++){
        if( i % 2 === 0){
            for( let y = 2; y <= secondNum; y++){
                let isPrime = true;
     
                for(let z = 2; z < y; z++){
                    if(y % z === 0){
                        isPrime = false;
     
                    }
                }
     
                if (isPrime){
                    for (let x = 1; x <= thirdNum; x++){
                        if(x % 2 === 0){
                            unicPin +=`${i}${y}${x} `
                            
                        }
                    }
                }
            }
        }
    }
     
     console.log(unicPin);
     
    }
    solve (["3","5","5"])