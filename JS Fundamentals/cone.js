function cone(r, h) {
    let r2 = r ** 2;
    let h2 = h ** 2;
    let V = (Math.PI * r2 * h) / 3;
    let S =  Math.PI * r * (r + Math.sqrt(r2 + h2));
    console.log(`volume = ${V.toFixed(4)}`);
    console.log(`area = ${S.toFixed(4)}`);
}

cone(3,5)