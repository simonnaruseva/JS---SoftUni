function checkForIdentical(firstArr, secondArr) {
    let areEqual = true;
    let sum = 0;

for(let i=0;i<firstArr.length;i++) {
    firstArr[i] = Number(firstArr[i]);
}

for(let i=0;i<secondArr.length;i++) {
    secondArr[i] = Number(secondArr[i]);
}

for(let i=0;i<firstArr.length;i++) {
if(firstArr[i] !== secondArr[i]) {
 console.log(`Arrays are not identical. Found difference at ${i} index`);
 areEqual = false;
 break;

} else {
 sum += firstArr[i];
 areEqual = true;
  }
}

if(areEqual) {
    console.log(`Arrays are identical. Sum: ${sum}`);
}

}

//checkForIdentical(['10','20','30'], ['10','20','30']);
// checkForIdentical(['1','2','3','4','5'], ['1','2','4','4','5']);
checkForIdentical(['1'], ['10']);