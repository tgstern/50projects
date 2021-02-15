const image = document.querySelector('.image')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

image.addEventListener('click', (e) => {
    if (clickTime === 0) {
        clickTime = new Date().getTime()
    } else {
        if((new Date().getTime() - clickTime) < 800) {
            createHeart(e)
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})

const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')
    const x = e.clientX - e.target.offsetLeft
    const y = e.clientY - e.target.offsetTop
    heart.style.top = `${y}px`
    heart.style.left = `${x}px`
    image.appendChild(heart)
    times.innerHTML = ++timesClicked
    setTimeout(() => heart.remove(), 1000)
}