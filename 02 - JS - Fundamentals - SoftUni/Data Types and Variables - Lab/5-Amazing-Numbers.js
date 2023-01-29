function checkAmazingNum(num) {
let str = num.toString();
let sum = 0;
isTrue = false;

for (const currentNum of str) {
    sum += Number(currentNum);
}

for (const iterator of sum.toString()) {
    if(iterator == 9) {
        isTrue = true;
    } else {
        isTrue = false;
    }
}
if(isTrue) {
    console.log(`${num} Amazing? True`);
} else {
    console.log(`${num} Amazing? False`);
}
}

// checkAmazingNum(1233);
checkAmazingNum(999);