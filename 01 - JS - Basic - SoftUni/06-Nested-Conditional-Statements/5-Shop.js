function printSum(input) {
let product = input[0];
let city = input[1];
let countProduct = Number(input[2]);

let sum = 0;

if(city == 'Sofia') {
    if(product == 'coffee') {
        sum = countProduct * 0.50;
    } 
    else if(product == 'water') {
        sum = countProduct * 0.80;
    }
    else if(product == 'beer') {
        sum = countProduct * 1.20;
    }
    else if(product == 'sweets') {
        sum = countProduct * 1.45;
    }
    else if(product == 'peanuts') {
        sum = countProduct * 1.60;
    } else {
        console.log("error");
    } 
}
else if(city == 'Plovdiv') {
    if(product == 'coffee') {
        sum = countProduct * 0.40;
    } 
    else if(product == 'water') {
        sum = countProduct * 0.70;
    }
    else if(product == 'beer') {
        sum = countProduct * 1.15;
    }
    else if(product == 'sweets') {
        sum = countProduct * 1.30;
    }
    else if(product == 'peanuts') {
        sum = countProduct * 1.50;
    } else {
        console.log("error");
    } 
} 
else {
    if(product == 'coffee') {
        sum = countProduct * 0.45;
    } 
    else if(product == 'water') {
        sum = countProduct * 0.70;
    }
    else if(product == 'beer') {
        sum = countProduct * 1.10;
    }
    else if(product == 'sweets') {
        sum = countProduct * 1.35;
    }
    else if(product == 'peanuts') {
        sum = countProduct * 1.55;
    } else {
        console.log("error");
    } 
}
console.log(sum);
}

printSum((["sweets", "Sofia", "2.23"]));