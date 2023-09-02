const stBtn = document.querySelector('.st-btn')
const itemMenu = document.querySelectorAll('.item-menu')

stBtn.addEventListener('click', () => {
    document.body.classList.toggle('heave')
})

function selectLink() {
    itemMenu.forEach((item) => {
        item.classList.remove('ativo')
    })
    this.classList.add('ativo')
}

itemMenu.forEach((item) => {
    item.addEventListener('click', selectLink)
})