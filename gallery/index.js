const slides = document.querySelectorAll('.slide');


slides.forEach(i => {
    i.addEventListener('click', active);
});

function active(e) {
    slides.forEach(i => {
        if (i.classList.contains('active')) {
            i.classList.remove('active')
        }
    })
    e.target.classList.add('active')
}
