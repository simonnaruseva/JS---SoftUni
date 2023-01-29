function priceMovieTicket(input) {
    let day = input[0];
    let priceTicket = 0;
    switch (day) {
        case 'Monday':
        case 'Tuesday':
            priceTicket = 12;
            break;
        case 'Wednesday':
        case 'Thursday':
            priceTicket = 14;
            break;
        case 'Friday':
            priceTicket = 12;
            break;
        case 'Saturday':
        case 'Sunday':
            priceTicket = 16;
            break;
    
        default:
            console.log("Error");
            break;
    }

    console.log(priceTicket);
}

priceMovieTicket((["Sunday"]))