function bin2dec(str) {
    let dec = 0;
    str = str.toString().split("").reverse().join("")
    for (let i = 0; i < str.length; i++) {
        num = Number(str[i]);
        dec += num * 2 ** i;
    }
    console.log(dec);
}

bin2dec(11110000);