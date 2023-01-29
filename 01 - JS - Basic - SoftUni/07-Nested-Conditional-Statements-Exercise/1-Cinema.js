function sumIncome(input) {
let typeProjection = input[0];
let rows = Number(input[1]);
let columns = Number(input[2]);

let priceProject = 0;
let places = rows * columns;
let income = 0;

switch (typeProjection) {
    case 'Premiere':
        priceProject = 12.0;
        break;
    case 'Normal':
        priceProject = 7.50;
        break;
    case 'Discount':
        priceProject = 5;
        break;
    default:
        break;

       
}

income = places * priceProject;
console.log(`${(income).toFixed(2)} leva`);

}

sumIncome((["Discount", "12", "30"]))

