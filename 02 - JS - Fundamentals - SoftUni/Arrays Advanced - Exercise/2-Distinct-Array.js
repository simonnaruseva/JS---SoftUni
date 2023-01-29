function removeRepeat(input) {
let result = [];

for (const i of input) {
    if(!result.includes(i)) {
        result.push(i);
    }
}
console.log(result.join(" "));
}

removeRepeat([1, 2, 3, 4]);