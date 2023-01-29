function printNameDay(day) {

    let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if(day >= 1 && day <= 7) {
         if(day === 1) {
            return daysOfWeek[0];
         }
         else if(day === 2) {
            return daysOfWeek[1];
         }
         else if(day === 3) {
            return daysOfWeek[2];
         }
         else if(day === 4) {
            return daysOfWeek[3];
         }
         else if(day === 5) {
            return daysOfWeek[4];
         }
         else if(day === 6) {
            return daysOfWeek[5];
         }
         else if(day === 7) {
            return daysOfWeek[6];
         }
    } else {
        return 'Invalid day!';
    }
}

console.log(printNameDay(3));