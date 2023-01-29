function radiansToDegrees(input) {
  let radiands = Number(input[0]);
  let degrees = radiands * 180 / Math.PI;
  console.log(degrees);
}

radiansToDegrees(["3.1416"]);