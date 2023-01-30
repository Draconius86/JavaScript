// function magicSum(array, givenNum) {
//  for (let i = 0; i < array.length - 1; i++) {
//         for (let j = i + 1; j < array.length; j++){
//             if (Number(array[i]) + Number(array[j]) === Number(givenNum)){
//                 console.log(array[i] + ` ` + array[j]);     
//             }
//         }
//     }
// }

function magicSum(array, givenNum) {
    let isUnique = false;
    let num2;
 
    for (let i = 0; i < array.length - 1; i++) {
        let num = array[i];
 
        for (let j = i + 1; j < array.length; j++) {
            num2 = array[j];
            if ((num + num2) === givenNum) {
                isUnique = true;
                break;
            } else {
                isUnique = false;
            }
        }
        if (isUnique === true) {
            console.log(`${num} ${num2}`);
        }
    }
}

magicSum([14, 20, 60, 13, 7, 20, 19, 8],27);