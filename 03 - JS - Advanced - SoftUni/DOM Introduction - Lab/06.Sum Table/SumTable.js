function sumTable() {
    let sum = 0;
   [...document.querySelectorAll("table tbody td:nth-child(even)")].slice(0, -1).forEach(el => {
    sum += Number(el.textContent)
  
});

document.getElementById("sum").textContent = sum;



}