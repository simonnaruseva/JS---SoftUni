function zoolandExpense(input) {
let countDogFood = Number(input[0]);
let countCatFood = Number(input[1]);
let foodDogSum = countDogFood * 2.5;
let foodCatSum = countCatFood * 4;

let finalSum = foodCatSum + foodDogSum;
console.log(`${finalSum} lv.`);
}

zoolandExpense(["13","9"]);