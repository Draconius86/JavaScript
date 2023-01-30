function trapec(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let h = Number(input[2]);
    let face = (a + b) * h / 2;
    console.log(face.toFixed(2));
}

trapec([5,8,4]);