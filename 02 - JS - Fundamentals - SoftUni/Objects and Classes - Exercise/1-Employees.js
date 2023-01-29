function printInfo(input) {
   let person = {};

    for(let i = 0; i < input.length; i++) {
        let name = input[i];
        person[name] = name.length;    
    }

     for (let i in person) {
        console.log(`Name: ${i} -- Personal Number: ${person[i]}`)
     }
}

printInfo([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]
)