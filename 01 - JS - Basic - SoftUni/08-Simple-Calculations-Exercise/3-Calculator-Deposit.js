function calcDeposit(input) {
let depositSum = Number(input[0]);
let periodMonth = Number(input[1]);
let yearProcent = Number(input[2]);

let sum = depositSum + periodMonth * ((depositSum * yearProcent) / 12);
console.log(sum);
}

calcDeposit(["200","3","5.7"]);