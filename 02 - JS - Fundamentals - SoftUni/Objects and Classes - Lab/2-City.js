function printInfo(input) {
  for (const i in input) {
   console.log(`${i} -> ${input[i]}`)
}

}

printInfo({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}
)