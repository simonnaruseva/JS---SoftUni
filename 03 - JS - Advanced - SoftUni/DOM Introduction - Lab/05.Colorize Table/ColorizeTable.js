function colorize() {
   Array.from(document.querySelectorAll('table tr:nth-child(even)')).forEach(element => {
     element.style.background = 'Teal'

    });

 //OR
   // [...document.querySelectorAll('table tr:nth-child(even)')].forEach(element => {
   //  element.style.background = 'Teal'
   // });

}