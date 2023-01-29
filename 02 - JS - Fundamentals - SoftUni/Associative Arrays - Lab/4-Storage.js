function printProducts(input) {
   let data = new Map();
    for(let i = 0; i < input.length; i++) {
        let [product, price] = input[i].split(" ");
        price = Number(price);
       
        if(!data.has(product)) {
            data.set(product, price);
        } else {
            let sum = data.get(product);
            data.set(product, sum += price);
        }
       
    }
   
    data.forEach((value, key) => console.log(`${key} -> ${value}`));
}

printProducts(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)