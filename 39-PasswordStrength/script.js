const password = document.getElementById('password')
const background = document.getElementById('background')

password.addEventListener('input', (e) => {
    const blur = 20 - e.target.value.length * 2
    background.style.filter = `blur(${blur}px)`
})