function operations(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let sign = input[2];
    let result = 0
    let evenOdd = " ";
    let list = ["+","-","*","/","%"];
    let list2 = ["+","-","*"];
    if (list.includes(sign)) {
        if (sign === "+") {
            result = n1 + n2;
                if (result % 2 == 0) {
                evenOdd = "even"
                } else {
                evenOdd = "odd";
                }
        } else if (sign === "-") {
            result = n1 - n2;
            if (result % 2 === 0) {
                evenOdd = "even"
            } else {
                evenOdd = "odd";
            }
        } else if (sign === "*") {
            result = n1 * n2;
            
            if(result % 2 === 0) {
                evenOdd = "even";
            } else {
                evenOdd = "odd";
            }
        } else if (sign === "/") {
            if (n2 == 0) {
                console.log(`Cannot divide ${n1} by zero`)
            } else {
                result = n1 / n2;
            }
        }  else if (sign === "%") {
            if (n2 == 0) {
                console.log(`Cannot divide ${n1} by zero`)
            } else {
                result = n1 % n2;
            }
        }   
}
    if (list2.includes(sign)) {
        console.log(`${n1} ${sign} ${n2} = ${result} - ${evenOdd}`);
    } else if (sign === "/" && n2 != 0) {
        console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
    } else if (sign === "%" && n2 != 0) {
        console.log(`${n1} % ${n2} = ${result}`)
    }
}

operations(['1','0','%']);