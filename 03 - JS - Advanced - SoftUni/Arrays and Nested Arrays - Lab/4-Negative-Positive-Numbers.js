function solve(input) {
let arr = [];

input.map(x => {
    x < 0 ? arr.splice(0, 0, x) : arr.push(x);
});

arr.forEach(el => {
    console.log(el);
});

}

solve([7, -2, 8, 9])