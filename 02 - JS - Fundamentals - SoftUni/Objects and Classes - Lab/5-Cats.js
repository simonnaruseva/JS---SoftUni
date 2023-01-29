function printInfo(input) {
let cat = [];
class Cat {
    constructor(catName, age) {
        this.catName = catName;
        this.age = age;
    }

     meow() {
        return `${this.catName}, age ${this.age} says Meow`;
    }
}

for (let i = 0; i < input.length; i++) {
    let [catName, age] = input[i].split(" ");
    cat.push(new Cat(catName, age))
    
}

for (let i of cat) {
    console.log(i.meow());
    }
}


printInfo(['Mellow 2', 'Tom 5']);