function sortByNegativeandPositive(input) {
    input = input.map(Number);
    let result = [];

for (let num of input) {
    if(num < 0 ) {
        result.unshift(num);   
        
    } else {
        result.push(num);
    }
}


for (let i of result) {
    console.log(i);
    }
}

sortByNegativeandPositive(['7', '-2', '8', '9']);