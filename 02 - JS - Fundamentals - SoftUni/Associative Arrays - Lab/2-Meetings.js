function printMeetings(input) {
let meetingsData = {};

for(let i = 0; i < input.length; i++) {
    let [day, name] = input[i].split(" ");
    
    if(!meetingsData.hasOwnProperty(day)) {
        meetingsData[day] = name;
        console.log(`Scheduled for ${day}`)
    } else {
        console.log(`Conflict on ${day}!`);
    }
}

for (let [key, value] of Object.entries(meetingsData)) {
    console.log(`${key} -> ${value}`);
    
    }
}

printMeetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)