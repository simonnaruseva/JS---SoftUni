function calc(firstNum, operator, secondNum) {
    let result = 0;

    switch (operator) {
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '/':
            result = firstNum / secondNum;
            break;
        case '*':
            result = firstNum * secondNum;
            break;
        default:
            break;
    }
    
    console.log(result.toFixed(2));
}

calc(5,
    '+',
    10
    );