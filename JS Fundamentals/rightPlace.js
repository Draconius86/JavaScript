function rightPlace(missing, char, target) {
    let final = missing.replace('_', char);
    if (final === target) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

rightPlace('Str_ng', 'I', 'Strong');