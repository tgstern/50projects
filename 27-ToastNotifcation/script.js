const toasts = document.getElementById('toasts')
const button = document.getElementById('button')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
    'Message Five',
]
const types = [
    'info',
    'success',
    'error',
    'warning',
]

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
    const toast = document.createElement('div')
    toast.classList.add('toast')
    toast.classList.add(type ? type : types[Math.floor(Math.random() * types.length)])
    toast.innerText = message ? message : messages[Math.floor(Math.random() * messages.length)]
    toasts.appendChild(toast)
    setTimeout(() => {
        toast.remove()
    }, 2500)
}