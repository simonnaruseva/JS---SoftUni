function sumHours(numOfPages, readedPagesForHour, days) {
let totalTime = numOfPages / readedPagesForHour;
let requiredHours = totalTime / days;

console.log(requiredHours);
}

sumHours(212,
    20 ,
    2 
    );