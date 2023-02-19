function friendList(arr) {
    let list = arr.shift();
    let names = list.split(', ');
    let name = "";
    let index = 0;
    let blacklisted = [];
    let lost = [];
    let blackCount = 0;
    let lostCount = 0;
    let j = 0;
    while (arr[j] !== 'Report') {
        let element = arr[j].split(' ');
        let command = element[0];
        switch (command) {
            case "Blacklist":
                name = element[1];
                index = names.indexOf(name);
                if (names.includes(name)) {
                    names.splice(index, 1, 'Blacklisted');
                    console.log(`${name} was blacklisted.`);
                    blacklisted.push(name);
                    blackCount++;
                } else {
                    console.log(`${name} was not found.`);
                }
                break;
            case "Error":
                index = Number(element[1]);
                name = names[index];
                if (index >= 0 && index < names.length && name !== 'Blacklisted' && name !== 'Lost') {
                    names.splice(index, 1, 'Lost');
                    console.log(`${name} was lost due to an error.`);
                    lost.push(name);
                    lostCount++;
                }
                break;
            case "Change":
                index = Number(element[1]);
                name = names[index];
                let newName = element[2];
                if (index >= 0 && index < names.length) {
                    names.splice(index, 1, newName);
                    console.log(`${name} changed his username to ${newName}.`);
                }
        }
        j++;
    }
    console.log(`Blacklisted names: ${blackCount}`);
    console.log(`Lost names: ${lostCount}`);
    console.log(names.join(' '));
}

friendList(["Mike, John, Eddie, William",
"Error 3",
"Error 3",
"Change 0 Mike123",
"Report"]);