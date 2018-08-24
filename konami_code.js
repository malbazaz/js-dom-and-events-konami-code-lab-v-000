

function init() {
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
  // Write your JavaScript code inside the init() function
let index = 0;
const input = document.querySelector('input')
function onKeyDownHandler(e){
    const key = parseInt(e.detail || e.which)
    if(key === code[index]){
      index++;
    } else {
      index = 0;
    }
    if(index === code.length){
      alert("Hurray!");
      index = 0;
    } else {
      index = 0;
    }
window.addEventListener('keydown', onKeyDownHandler(e));
}
}
