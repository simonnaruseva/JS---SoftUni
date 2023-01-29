function solve(names) {
    let validNames = [];
    let pattern = /\b[A-Z]{1}[a-z]+\s[A-Z]{1}[a-z]+\b/g;

    while((valid = pattern.exec(names)) !== null) {
        validNames.push(valid[0]);
    }

    console.log(validNames.join(' '));
}

solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")