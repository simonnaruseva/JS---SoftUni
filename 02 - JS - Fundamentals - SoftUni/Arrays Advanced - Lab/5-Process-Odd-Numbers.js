function process(input) {
function isOddIndex(value, index) {
    return index % 2 === 1;
}

input = input
.filter(isOddIndex)
.map(x => x * 2)
.reverse()
.join(" ");

console.log(input);
}

process([10, 15, 20, 25]);