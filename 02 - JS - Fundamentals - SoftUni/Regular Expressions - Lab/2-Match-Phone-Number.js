function solve(numbers) {
    let validPhones = [];
    let pattern = /\+([359]+)([-| ])2(\2)(\d{3})(\2)(\d{4})\b/g;

    while((validPhone = pattern.exec(numbers)) !== null) {
        validPhones.push(validPhone[0]);
    }

    console.log(validPhones.join(', '));
}

solve(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])