const toggles = document.querySelectorAll('.toggle')
const good = document.getElementById('good')
const cheap = document.getElementById('cheap')
const fast = document.getElementById('fast')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => tradeoff(e.target)))

function tradeoff(clicked) {
    if (good.checked && cheap.checked && fast.checked) {
        if (good === clicked) {
            fast.checked = false
        }
        if (cheap === clicked) {
            good.checked = false
        }
        if (fast === clicked) {
            cheap.checked = false
        }
    }
}