function checkOnTime(input) {
  let examTime = Number(input[0]);
  let minuteExam = Number(input[1]);
  let hourArrival = Number(input[2]);
  let minuteArrival = Number(input[3]);

  if(hourArrival > examTime) {
    console.log('Late');
  } else if(hourArrival == examTime && minuteExam == 0 || minuteExam <= 30) {
    console.log('On time')
  }

}

checkOnTime((["9",

"30",

"9",

"50"]));