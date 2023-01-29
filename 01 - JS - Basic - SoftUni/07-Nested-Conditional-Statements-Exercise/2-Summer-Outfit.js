function printOutfit(input) {
    let degrees = Number(input[0]);
    let timeOfDay = input[1];

    let clothing = '';
    let shoes = '';

    switch (timeOfDay) {
        case 'Morning':
            if(degrees >= 10 && degrees <= 18) {
                clothing = 'Sweatshirt';
                shoes = 'Sneakers';
            }
            else if(degrees >18 && degrees <= 24) {
                clothing = 'Shirt';
                shoes = 'Moccassins';
            } else {
                clothing = 'T-Shirt';
                shoes = 'Sandals';
            }
            break;
        case 'Afternoon':
            if(degrees >= 10 && degrees <= 18) {
                clothing = 'Shirt';
                shoes = 'Moccassins';
            }
            else if(degrees >18 && degrees <= 24) {
                clothing = 'T-Shirt';
                shoes = 'Sandals';
            } else {
                clothing = 'Swim Suit';
                shoes = 'Barefoot';
            }
            break;
        case 'Evening':
            if(degrees >= 10 && degrees <= 18) {
                clothing = 'Shirt';
                shoes = 'Moccassins';
            }
            else if(degrees >18 && degrees <= 24) {
                clothing = 'Shirt';
                shoes = 'Moccassins';
            } else {
                clothing = 'Shirt';
                shoes = 'Moccassins';
            }
            break;
    
    
        default:
            break;
    }
    console.log(`It's ${degrees} degrees, get your ${clothing} and ${shoes}.`)
}

// printOutfit((["16", "Morning"]))


printOutfit((["22",

"Afternoon"]))
