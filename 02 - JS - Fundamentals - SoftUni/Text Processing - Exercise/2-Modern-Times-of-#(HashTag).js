function foo(str) {
    str.match(/#[a-zA-Z]+/g).forEach(x => { console.log(x.slice(1)) });
}

foo('The symbol # is known #variously in English-speaking #regions as the #number sign')