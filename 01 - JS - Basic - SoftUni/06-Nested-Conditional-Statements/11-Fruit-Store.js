function sumFruitPrice(input) {
let fruit = input[0];
let day = input[1];
let countFruit = input[2];

let sum = 0;

switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            switch (fruit) {
                case 'banana':
                    sum = 2.50 * countFruit;
                    break;
                case 'apple':
                    sum = 1.20 * countFruit;
                    break;
                case 'orange':
                    sum = 0.85 * countFruit;
                    break;
                case 'grapefruit':
                    sum = 1.45 * countFruit;
                    break;
                case 'kiwi':
                    sum = 2.70 * countFruit;
                    break;
                case 'pineapple':
                    sum = 5.50 * countFruit;
                    break;
                case 'grapes':
                    sum = 3.85 * countFruit;
                    break;
            
                default:
                    console.log("error");
                    break;
            }
            break;
        case 'Saturday':
        case 'Sunday':
            switch (fruit) {
                case 'banana':
                    sum = 2.70 * countFruit;
                    break;
                case 'apple':
                    sum = 1.25 * countFruit;
                    break;
                case 'orange':
                    sum = 0.90 * countFruit;
                    break;
                case 'grapefruit':
                    sum = 1.60 * countFruit;
                    break;
                case 'kiwi':
                    sum = 3.00 * countFruit;
                    break;
                case 'pineapple':
                    sum = 5.60 * countFruit;
                    break;
                case 'grapes':
                    sum = 4.20 * countFruit;
                    break;
            
                default:
                    console.log("error");
                    break; 
            }
           
        default:
            break;
    }

    if(sum !== 0) {
    console.log(sum.toFixed(2));
    }
}


sumFruitPrice((["apple",
"Tuesday",
"2"]));