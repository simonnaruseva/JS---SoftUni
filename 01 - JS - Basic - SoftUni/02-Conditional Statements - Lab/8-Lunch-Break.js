function isEnoughTime(input) {
let movieName = input[0];
let episodeLength = Number(input[1]);
let durationBreak = Number(input[2]);

let timeLunch = durationBreak * 1/8;
let leisureTime = durationBreak * 1/4;
let totalTime = durationBreak - (timeLunch + leisureTime);


if(episodeLength <= totalTime) {
    console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(totalTime - episodeLength)} minutes free time.`);
} else {
    console.log(`"You don't have enough time to watch ${movieName}, you need ${Math.ceil(episodeLength - totalTime)} more minutes."`);
}
}

isEnoughTime((["Teen Wolf",
"48",
"60"]))