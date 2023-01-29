function sumTotalPrice(input) {
let budget = Number(input[0]);
let countVideoCards = Number(input[1]);
let countProcessor = Number(input[2]);
let countRam = Number(input[3]);

let priceVideoCards = countVideoCards * 250;
let priceProcessor = countProcessor * (priceVideoCards * 0.35);
let priceRam = countRam * (priceVideoCards * 0.10);

let discount = 0;
let sum = priceVideoCards + priceProcessor + priceRam;

if(countVideoCards > countProcessor) {
  discount = sum * 0.15;
  sum -= discount;
}
if(budget > sum){
    console.log(`You have ${(budget - sum).toFixed(2)} leva left!`);
} else {
    console.log(`Not enough money! You need ${(sum - budget).toFixed(2)} leva more!`);
    }
}

sumTotalPrice((["920.45",
"3",
"1",
"1"]))