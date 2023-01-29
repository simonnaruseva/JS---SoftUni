// function readWords(input) {
//     let index = 0;
//     let str = input[index];
//     while(str != 'Stop') {
//         console.log(input[index]);

//         index++;
//         str = input[index];
//     }
// }

// readWords((["Nakov",

// "SoftUni",

// "Sofia",

// "Bulgaria",

// "SomeText",

// "Stop",

// "AfterStop",

// "Europe",

// "HelloWorld"]))



function readString(input) {
    let index = 0;
    let text = input[index];
    index++;

  

    while(text !== 'Stop') {
        console.log(text);

        text = input[index];
        index++;
    }

   

}

// readString((["Nakov","SoftUni","Sofia","Bulgaria","SomeText","Stop","AfterStop","Europe","HelloWorld"]));

readString((["Sofia", "Berlin", "Moscow", "Athens", "Madrid", "London", "Paris", "Stop", "AfterStop"]))