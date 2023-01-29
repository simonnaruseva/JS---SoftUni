function printSmallest(input) {
  let firstSmallest = Math.min(...input);
  input.splice(input.indexOf(firstSmallest), 1);
  let secondSmallest = Math.min(...input);

  console.log(`${firstSmallest} ${secondSmallest}`);
}

printSmallest([30, 15, 50, 5])