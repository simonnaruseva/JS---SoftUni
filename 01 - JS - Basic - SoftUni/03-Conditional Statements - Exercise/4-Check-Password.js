function checkPassword(input) {
let custInput = input[0];

if(custInput == "s3cr3t!P@ssw0rd") {
    console.log("Welcome");
} else {
    console.log("Wrong Password");
    }
}

checkPassword(["s3cr3t!P@ssw0rd"]);