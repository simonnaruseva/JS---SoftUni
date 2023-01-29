function reverseArray(reverseCount, arr) {
let reversedArr = [];

for(let i = 0; i <arr.length; i++) {
    if(i >= reverseCount) {
        break;
    }
    reversedArr.push(arr[i]);

}

console.log(reversedArr.reverse().join(" "));

}

reverseArray(3, [10, 20, 30, 40, 50]);