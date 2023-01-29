function addItem() {
    let input = document.getElementById("newItemText").value;
    let textNode = document.createTextNode(input);

    li = document.createElement("li");
    li.appendChild(textNode);
    
    //OR
    // li.textContent = input;

    document.getElementById("items").appendChild(li);
   

}