window.onload = start();

function start() {
    // const img = document.querySelector('img');
    // setInterval(() => {
    //     if (img.classList.contains('down')) {
    //         img.classList.add('up');
    //         img.classList.remove('down');
    //     } else {
    //         img.classList.remove('up');
    //         img.classList.add('down');
    //     }
    // }, 5000)

    const btn = document.querySelector('.btn');
    btn.addEventListener('click', () => {
        btn.classList.add('down');
    });
    const width = document.body.clientWidth;
    console.log(width)
    btn.style.letterSpacing = `${width + 10}px`;
    console.log(btn.style.letterSpacing)
    setTimeout(() => {
        btn.classList.add('together');
    }, 300)
}