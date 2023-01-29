function sumMoney(input) {
let typeFlower = input[0];
let countFlowers = Number(input[1]);
let budget = Number(input[2]);

let discount = 0;
let priceExpensive = 0;
let priceFlower = 0;
let sum  = 0;
let totalSum = 0;

if (typeFlower == 'Roses') {
    priceFlower = 5;

    if(countFlowers > 80) {
        discount = 0.10;
        sum = countFlowers * priceFlower;
       totalSum = sum - (sum * discount);
    } 
    else {
    totalSum = countFlowers * priceFlower;
    }
}

else if(typeFlower == 'Dahlias'){
    priceFlower = 3.80;

    if(countFlowers > 90) {
        discount = 0.15;
        sum = countFlowers * priceFlower;
       totalSum = sum - (sum * discount);
    } 
    else {
    totalSum = countFlowers * priceFlower;
    }

}

else if(typeFlower == 'Tulips'){
    priceFlower = 2.80;

    if(countFlowers > 80) {
        discount = 0.15;
        sum = countFlowers * priceFlower;
       totalSum = sum - (sum * discount);
    } 
    else {
    totalSum = countFlowers * priceFlower;
    }
} 

else if(typeFlower == 'Narcissus'){
    priceFlower = 3;

    if(countFlowers < 120) {
        priceExpensive = 0.15;
        sum = countFlowers * priceFlower;
        totalSum = sum + (sum * priceExpensive);
     } 
     else {
     totalSum = countFlowers * priceFlower;
     }
} 

else if(typeFlower == 'Gladiolus'){
    priceFlower = 2.50;
    if(countFlowers < 80) {
        priceExpensive = 0.15;
        sum = countFlowers * priceFlower;
        totalSum = sum + (sum * priceExpensive);
     } 
     else {
     totalSum = countFlowers * priceFlower;
     }
} 
else {
    console.log('error');
}


if(budget < totalSum) {
    console.log(`Not enough money, you need ${(totalSum - budget).toFixed(2)} leva more.`)
    } else {
        console.log(`Hey, you have a great garden with ${countFlowers} ${typeFlower} and ${(budget - totalSum).toFixed(2)} leva left.`)
    }
} 

sumMoney((["Tulips",

"88",

"260"]))


//sumMoney((["Narcissus", "119", "360"]))