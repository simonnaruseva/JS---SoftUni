function sumDigits(input) {
let num = input.toString();
let sum = 0;

for(i=0;i<num.length;i++) {
    let currentNum = Number(num[i]);
    sum += currentNum;
}

console.log(sum);

}

sumDigits(543);