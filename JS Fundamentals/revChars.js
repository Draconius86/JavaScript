function revChars(char1, char2, char3) {
    let str = char1 + char2 + char3;
    str = str.split("").reverse().join(" ")
    console.log(str);
}

revChars('1',
'L',
'&'
)