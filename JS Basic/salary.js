function salary(data) {
    let salary = Number(data[1]);
    for (let i = 2; i <= data.length; i++) {
        if (data[i] === "Facebook") {
            salary -= 150;
        } else if (data[i] === "Instagram") {
            salary -= 100;
        } else if (data[i] === "Reddit") {
            salary -= 50;
        } else {
            salary = salary;
        }
        if (salary <= 0) {
            console.log(`You have lost your salary.`);
            break;
        }
    }
    if (salary > 0) {
        console.log(Math.abs(salary));
    }
}

salary(["10",

"750",

"Facebook",

"Dev.bg",

"Instagram",

"Facebook",

"Reddit",

"Facebook",

"Facebook"]);