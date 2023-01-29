function printGuests(input) {
    let result = [];

    for (let i of input) {
        let splitted = i.split(" ");
        let name = splitted[0];
       
        if(splitted.length === 3) {
            if(result.includes(name)) {
                console.log(`${name} is already in the list!`);
            }
            result.push(name);
        } else {
            if (result.includes(name)) {
                let index = result.indexOf(name);
                result.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    for (let el of result) {
        console.log(el);
    }
}


printGuests(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
); 