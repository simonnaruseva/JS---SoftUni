function changeValue(input) {
    let sumOriginalArray = 0;
    let sumModifiedArray = 0;
    let index = 0;
    let newArr = [];

for(i=0; i<input.length; i++) {

    if(input[i] % 2 == 0) {
       newArr.push(input[i] + i);
    } else {
        newArr.push(input[i] - i);
    }
    sumOriginalArray += input[i];
    index++;
}

for (const num of newArr) {
    sumModifiedArray += num;
}

console.log(newArr);
console.log(sumOriginalArray);
console.log(sumModifiedArray);

}

changeValue([-5, 11, 3, 0, 2]);