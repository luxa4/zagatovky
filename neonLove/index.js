window.onload = start;

var text;
var width;

document.addEventListener('DOMContentLoaded', () => {
    text = document.querySelector('.text');
    width = document.body.clientWidth;
    text.style.letterSpacing = `${width + 300}px`;
})


function start() {
    setTimeout(() => {
        text.classList.add('together');
    }, 500)
}