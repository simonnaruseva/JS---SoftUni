function sumOddandEven(n) {
let arr = String(n).split('');

let sumOdd = 0;
let sumEven = 0;

for (let i of arr) {
    i = Number(i);
    if(i % 2 === 0) {
        sumOdd += i;
    } else {
        sumEven +=i;
    }
}
console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);

}

sumOddandEven(1000435);