function sumTotalPrice(product, quantity) {
let price = 0;
let sum = 0;

let totalPrice = () =>  {
    sum = price * quantity;
    return sum.toFixed(2);
};

switch (product) {
    case 'coffee':
        price = 1.50;
        console.log(totalPrice());
        break;
    case 'coke':
        price = 1.40;
        console.log(totalPrice());
        break;
    case 'water':
        price = 1.00;
        console.log(totalPrice());
        break;
    case 'snacks':
        price = 2.00;
        console.log(totalPrice());
        break;
    
    default:
        break;
}

}

sumTotalPrice("water", 5);