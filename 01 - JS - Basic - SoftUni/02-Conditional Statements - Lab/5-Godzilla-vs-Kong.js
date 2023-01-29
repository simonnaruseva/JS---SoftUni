function sumMoneyForMovie(input) {
let movieBudget = Number(input[0]);
let countEmployee = Number(input[1]);
let pricePerOutfit = Number(input[2]);

let priceDecor = movieBudget * 0.10;
let totalPriceOutfit = countEmployee * pricePerOutfit;
let discount = 0;

if(countEmployee > 150) {
    discount = totalPriceOutfit * 0.10;
}

let totalSum = priceDecor + (totalPriceOutfit - discount);


if(totalSum > movieBudget) {
    console.log("Not enough money!");
    console.log(`Wingard needs ${(totalSum - movieBudget).toFixed(2)} leva more.`);
} else {
    console.log("Action");
    console.log(`Wingard starts filming with ${(movieBudget - totalSum).toFixed(2)} leva left.`);
    }
}

sumMoneyForMovie((["9587.88",
"222",
"55.68"]));