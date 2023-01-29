function printOrderedProducts(input) {
input = input.sort();

for(i = 0; i< input.length;i++) {
    console.log(`${i+1}.${input[i]}`)
    }
}

printOrderedProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
// printOrderedProducts(['Watermelon', 'Banana', 'Apples']);