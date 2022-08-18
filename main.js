
window.addEventListener('load',() => {
    // buttons
    const left = document.querySelector('.btn-left')
    const right = document.querySelector('.btn-right')
    //carousel
    const slider = document.querySelector('.carouselSlide')
    const images = document.querySelectorAll('.carouselSlide img')

    //counter
    let counter = 0
    let stepSize = images[0].clientWidth

    window.addEventListener(`resize`, event => {
        stepSize = images[0].clientWidth
    })

    right.addEventListener('click', () => {
        counter >= images.length - 1 ? (counter = -1) : null
        slider.classList.add('transformanimation')
        counter++;
        slider.style.transform = `translateX(${-stepSize * counter}px)`
    })

    left.addEventListener('click', () => {
        counter <= 0 ? (counter = images.length) : null
        slider.classList.add('transformanimation')
        counter--
        slider.style.transform = `translateX(${-stepSize * counter}px)`
    })


})