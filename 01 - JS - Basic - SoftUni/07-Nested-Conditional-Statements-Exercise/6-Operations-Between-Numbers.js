function calc(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let operator = input[2];

    let result = 0;
    let evenOrOdd = '';

    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b; 
            break;
        case '%':
                result = a % b; 
                break;
        default:
            break;
    }

    if(operator == '+' || operator == '-' || operator == "*") {
    if(result % 2 == 0) {
        evenOrOdd = 'even';
    } else {
        evenOrOdd = 'odd';
    }
   console.log(`${a} ${operator} ${b} = ${result} - ${evenOrOdd}`);
} else if(operator == '/'){
    if(b == 0) {
        console.log(`Cannot divide ${a} by zero`);
    } else {
        console.log(`${a} ${operator} ${b} = ${(result).toFixed(2)}`);
    } 

} else if(operator == '%') {
    if(b == 0) {
        console.log(`Cannot divide ${a} by zero`);
    } else {
        console.log(`${a} ${operator} ${b} = ${(result)}`);
    } 
}}


//calc((["10","12","+"]));

//calc((["123", "12", "/"]))

//calc((["112", "0", "/"]))

//calc((["10", "1", "-"]))

//calc((["7","3","*"]))

//calc((["10", "0", "%"]))

calc((["7","3","*"]))

