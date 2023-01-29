function extractText() {
let items = document.getElementById("items").getElementsByTagName("li");
let result = document.getElementById("result");

for (let li of items) {
    result.value += li.textContent + "\n";
}

}