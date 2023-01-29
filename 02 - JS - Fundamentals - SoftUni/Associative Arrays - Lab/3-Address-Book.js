function printInfo(input) {
let data = {};

for(i = 0; i < input.length; i++) {
let [name, address] = input[i].split(":");
if(!data.hasOwnProperty(address)) {
    data[name] = address;
} else {
    data[name] = address;
    }
}

data = Object.entries(data).sort((a,b) => a[0].localeCompare(b[0]))

for (let [key, value] of data) {
    console.log(`${key} -> ${value}`);
    
    }
}

printInfo(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)