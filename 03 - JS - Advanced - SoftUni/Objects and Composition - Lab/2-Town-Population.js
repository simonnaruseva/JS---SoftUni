
function foo(towns) {
let townsData = {};
let sum = 0;
   towns.forEach(el => {
     let [town, population] = el.split(" <-> ");
     if(townsData.hasOwnProperty(town)) {
        townsData[town].population += Number(population);
     } else {
        townsData[town] = {
            population: Number(population)
          }
     }
   });

   for (let town in townsData) {
    console.log(`${town} : ${townsData[town].population}`)
  }
}
foo(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
)