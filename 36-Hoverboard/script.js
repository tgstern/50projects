const container = document.getElementById('container')
const colors = ['#73FBD3', '#44E5E7', '#59D2FE', '#4A8FE7', '#5C7AFF']
const SQUARES = 500

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))
    container.appendChild(square)
}

function setColor(element) {
    const color = colors[Math.floor(Math.random() * colors.length)]
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}