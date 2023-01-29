function printMatches(firstArr, secondArr) {

    for (const currElofFirstArr of firstArr) {
        for (const currElofSecondArr of secondArr) {
            if(currElofFirstArr === currElofSecondArr) {
                console.log(currElofFirstArr);
            }
        }
    }
}

printMatches(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
);