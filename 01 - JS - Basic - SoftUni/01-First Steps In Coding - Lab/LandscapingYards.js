function sumLandscapingYards(input) {
let metersLandscaping = input[0];
let pricePerMeter = 7.61;
let discount = 0.18;

let countPrice = metersLandscaping * pricePerMeter;
let countDsicount = countPrice * discount;
let finalSum = countPrice - countDsicount;

console.log(`The final price is: ${finalSum} lv.`);
console.log(`The discount is: ${countDsicount} lv.`);

}

sumLandscapingYards(["550"]);