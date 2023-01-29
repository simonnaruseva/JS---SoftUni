function printAverageGrades(input) {
let students = {};

for(i = 0; i < input.length; i++) {
    let data = input[i].split(" ");
    let name = data.shift();
    let grades = data.map(Number);

    if(!students.hasOwnProperty(name)) {
        students[name] = [];
    } 

    let existing = students[name];
    for(let grade of grades) {
        existing.push(grade);
    }
}
let sorted = Object.entries(students).sort(compareAverage);


for (let [name, grades] of sorted) {
    console.log(`${name}: ${grades.join(', ')}`)
    
}

function compareAverage([nameA, gradesA], [nameB, gradesB]) {
    let avgA = gradesA.reduce((p, c) => p + c, 0) / gradesA.length;
    let avgB = gradesB.reduce((p, c) => p + c, 0) / gradesB.length;

    return avgA - avgB;
}


}


printAverageGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)