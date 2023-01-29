function sumSwimmingRecord(input) {
let swimmingRecord = Number(input[0]);
let metres = Number(input[1]);
let timeSecondsForMetre = Number(input[2]);
let totalTime = 0;



let time = metres * timeSecondsForMetre;
let waterResistanceSec = Math.floor(( metres / 15 ) * 12.5);
totalTime = time + waterResistanceSec;

if(totalTime < swimmingRecord) {
    console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
} else {
    console.log(`No, he failed! He was ${(totalTime - swimmingRecord).toFixed(2)} seconds slower.`);
}

}

sumSwimmingRecord((["10464",
"1500",
"20"]))