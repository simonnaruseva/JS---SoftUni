function printInfo(input) {
   let object = [];

   input.forEach(x => {
    let [town, latitude, longtitude] = x.split(" | ");

    object.push({
        town,
        latitude: Number(latitude).toFixed(2),
        longitude: Number(longtitude).toFixed(2)
    });
   })

 object.forEach(x => {
    console.log(x);
 })
 
} 

printInfo(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)