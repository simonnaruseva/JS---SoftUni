function returnArea(input) {
    let figure = (input[0]).toLowerCase();
    let a = Number(input[1]);
    let b = 0;
    let h = 0;
    let area = 0;

    switch(figure){
        case 'square':
            area = Math.pow(a,2);
            break;
        case 'rectangle':
            b = Number(input[2]);
            area = a * b;
            break;
        case 'circle':
            area = Math.PI*(Math.pow(a,2));
            break;
        case 'triangle':
            h = Number(input[2]);
            area = (a*h) /2;
            break;
        default:
            break;
    }
    console.log(area.toFixed(3));

}

returnArea(["triangle", "4.5", "20"]);