function addAndSubtract(x,y,z) {

    function sum(a, b) {
        return a + b;
    }

    function subtract(total, z) {
        return total - z;
    }

    return subtract(sum(x,y), z);
}

//OR
// function addAndSubtract(x,y,z) {

//     function sum(a, b) {
//         return a + b;
//     }

//     let result = sum(x,y); 
//     return result - z;

 
// }

console.log(addAndSubtract(23,
    6,
    10        
));

