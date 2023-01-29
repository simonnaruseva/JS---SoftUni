function checkIfMatched(firstString, char, secondString) {
    firstString = firstString.replace('_', char);
    
    if(firstString === secondString) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }

}

checkIfMatched('Str_ng', 'I', 'Strong');
//checkIfMatched('Str_ng', 'i', 'String');