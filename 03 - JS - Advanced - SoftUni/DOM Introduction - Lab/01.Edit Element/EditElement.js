function editElement(el, text, replacedText) {
    let re = new RegExp(text, 'g');
    el.textContent = el.textContent.replace(re, replacedText)
   
 
    // TODO
}