const typeEl = document.getElementById('type')
const speedEl = document.getElementById('speed')
const textEl = document.getElementById('text')
let text = 'JavaScript is the best!'
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
    typeEl.innerText = text.slice(0, idx)
    idx++
    if(idx > text.length) {
        idx = 1
    }
    setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)

textEl.addEventListener('input', (e) => {
    if (e.target.value === '') {
        text = 'JavaScript is the best!'
    }
    text = e.target.value
})