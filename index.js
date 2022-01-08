const open = document.querySelectorAll('.faq-toggle')


open.forEach((e) => {
e.addEventListener('click', () => {
    e.parentNode.classList.toggle('active')
})
})