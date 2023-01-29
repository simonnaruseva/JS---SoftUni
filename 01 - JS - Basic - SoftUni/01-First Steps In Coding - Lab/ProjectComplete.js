function projectComplete(input) {
    let firstName = input[0];
    let countProject = Number(input[1]);
    let hoursPerProject = 3;

    let allHours = countProject * hoursPerProject;
    console.log(`The architect ${firstName} will need ${allHours} hours to complete ${countProject} project/s.`)
}  
projectComplete(["George","4"]);