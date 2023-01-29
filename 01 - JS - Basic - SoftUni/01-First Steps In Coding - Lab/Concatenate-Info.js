function concatenateInfo(input) {
    let firstName = input[0];
    let lastName = input[1];
    let age = input[2];
    let town = input[3];
    
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}`);
}

concatenateInfo(['George','Lill',24,'Varna']);