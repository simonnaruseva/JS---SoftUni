// function sumAverageGrade(input) {
// let name = input[0];
// let index = 1;
// let command = input[index];
// index++;

// let sum = 0;
// let counter = 0;
// let average = 0;
// let flag = true;

// while(command < 12) {
//     let grade = Number(command);
//     console.log(grade);
//     if(grade <= 2) {
//         console.log(`${name} has been excluded at ${index-1} grade`);
//         flag = false;
//         break;
//     }
//     counter++;
//     sum += grade;
//     average = sum / counter;

//     command = input[index];
//     index++;


// }
// if(average >= 4.00 && flag == true) {
//     console.log(`${name} graduated. Average grade: ${(average).toFixed(2)}`);
  
// }
// }


function sumAverageGrade(input) {
    let name = input[0];
    let index = 1;
 
   
    let negativeGradeCount = 0;
    let sumGrade = 0;
    let i = 1;
    
    
    while(i <= 12) {
        let currentGrade = Number(input[index]);
       

        if(currentGrade < 4.00) {
            negativeGradeCount++;
            if(negativeGradeCount == 2) {
                break;
            }
            continue;
        }

        sumGrade += currentGrade;
       
        

        command = input[index];
        i++;
        index++;

    
    }
    if(negativeGradeCount == 2) {
        console.log(`${name} has been excluded at ${i} grade`);
    } else {
    let avgGrade = sumGrade / (i - 1);
    console.log(`${name} graduated. Average grade: ${(avgGrade).toFixed(2)}`);
    }
}

sumAverageGrade((["Gosho","5","5.5","6","5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]))

//sumAverageGrade((["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"]))