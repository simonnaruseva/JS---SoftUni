function arrayRotaion(arr, rotations) {
let shiftedNum = 0;

for(i=0; i < rotations; i++) {
shiftedNum = arr.shift();
arr.push(shiftedNum);

}
console.log(arr.join(" "));
}


arrayRotaion([51, 47, 32, 61, 21], 2);