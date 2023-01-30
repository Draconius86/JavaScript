function animalType(data) {
    var animap = new Map([
        ['dog', 'mammal'],
        ['crocodile', 'reptile'],
        ['tortoise', 'reptile'],
        ['snake', 'reptile']
    ])

    var anilist = ['dog','crocodile','tortoise','snake'];

    var animal = data[0];

    if (anilist.includes(animal)) {
        console.log(animap.get(animal));
    } else {
        console.log('unknown');
    }
}

animalType(['snake']);