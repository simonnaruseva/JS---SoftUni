function sortNames(input) {
        input.sort((a, b) => a.localeCompare(b))
             .forEach((el, i) => {
                console.log(`${i+1}.${el}`);
             });
}

sortNames(["John", "Bob", "Christina", "Ema"])