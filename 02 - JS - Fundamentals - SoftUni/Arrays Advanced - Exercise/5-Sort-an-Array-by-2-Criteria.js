function sort(input) {
input = input
.sort((a, b) => a.length - b.length || a.localeCompare(b))
.join('\n');


console.log(input);
}

sort(['alpha', 'beta', 'gamma']);
sort(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);