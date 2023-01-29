function sumMoney(input) {
    let budgetGroup = Number(input[0]);
    let season = input[1];
    let countFishers = Number(input[2]);
    
  let priceRent = 0;
  let discount = 0;
  let totalSum = 0;

  if(countFishers % 2 == 0 && season !== 'Autumn') {
    discount = 0.5;
  }
 else {
    discount = 0;
 }


    if(season == 'Spring') {
        priceRent = 3000;
    
        if(countFishers <= 6) {
            discount += 0.10;
        } 
        else if(countFishers >= 7 && countFishers <= 11) {
            discount += 0.15;
        }
        else {
            discount += 0.25;
        }
        totalSum = priceRent - (priceRent * discount);
    }
    
    else if(season == 'Summer'){
        priceRent = 4200;
    
        if(countFishers <= 6) {
            discount += 0.10;
        } 
        else if(countFishers >= 7 && countFishers <= 11) {
            discount += 0.15;
        }
        else {
            discount += 0.25;
        }
        totalSum = priceRent - (priceRent * discount);
    }
    
    else if(season == 'Autumn'){
        priceRent = 4200;
    
        if(countFishers <= 6) {
            discount += 0.10;
        } 
        else if(countFishers >= 7 && countFishers <= 11) {
            discount += 0.15;
        }
        else {
            discount += 0.25;
        }
        totalSum = priceRent - (priceRent * discount);
    } 
    
    else if(season == 'Winter'){
        priceRent = 2600;
    
        if(countFishers <= 6) {
            discount += 0.10;
        } 
        else if(countFishers >= 7 && countFishers <= 11) {
            discount += 0.15;
        }
        else {
            discount += 0.25;
        }
        totalSum = priceRent - (priceRent * discount);
    } 
    
    else {
        console.log('error');
    }
    

    
    if(budgetGroup < totalSum) {

        console.log(`Not enough money, you need ${(totalSum - budgetGroup).toFixed(2)} leva.`);

        } else {
            
            console.log(`Yes! You have ${(budgetGroup - totalSum).toFixed(2)}  leva left.`);
        }
    } 
    
    sumMoney((["2000", "Winter", "13"]))


    // sumMoney((["3600","Autumn","6"]))


   // sumMoney((["2000", "Winter", "13"]))