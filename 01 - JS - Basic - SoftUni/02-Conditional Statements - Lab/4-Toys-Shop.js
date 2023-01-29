function sumToys(input) {
 let sumForTrip = Number(input[0]);
 let countPuzzle = Number(input[1]);
 let countDoll = Number(input[2]);
 let countBear = Number(input[3]);
 let countMignon = Number(input[4]);
 let countTruck = Number(input[5]);

 let discount = 0;
 let totalSum = 0;

 let pricePuzzle = countPuzzle * 2.60;
 let priceDoll = countDoll * 3;
 let priceBear = countBear * 4.10;
 let priceMignon = countMignon * 8.20;
 let priceTruck = countTruck * 2;

 let totalCountToys = countPuzzle + countDoll + countBear + countMignon + countTruck;
 let sum = pricePuzzle + priceDoll + priceBear + priceMignon + priceTruck;

 if(totalCountToys >= 50) {
    discount = sum * 0.25;
    sum = sum - discount;
 }

let rent = sum * 0.10;
totalSum = sum - rent;


if(sumForTrip <= totalSum) {
    console.log(`Yes! ${(totalSum - sumForTrip).toFixed(2)}lv left.`);
} else {
    console.log(`Not enough money! ${(sumForTrip - totalSum).toFixed(2)} lv needed`);
    }
}

sumToys((["320", "8", "2", "5", "5", "1"]))
