
const seletor = document.querySelector('.container-bola')

const bolamove = document.querySelector('.bola')

let preco = Array(document.querySelector('#p1'), document.querySelector('#p2'), document.querySelector('#p3'))

let seletorOn = false


    seletor.addEventListener('click', () => {
        if (!seletorOn) {
            bolamove.classList.add('bola-move')

            preco[0].innerHTML = "R$ 199<span>/ano</span>"
            preco[1].innerHTML = "R$ 699<span>/ano</span>"
            preco[2].innerHTML = "R$ 299<span>/ano</span>"

            seletorOn = true
        } else {
            bolamove.classList.remove('bola-move')

            preco[0].innerHTML = "R$ 20<span>/mês</span>"
            preco[1].innerHTML = "R$ 60<span>/mês</span>"
            preco[2].innerHTML = "R$ 28<span>/mês</span>"

            seletorOn = false
        }
    })

    const menuBtn = document.querySelector('.hamburger')
    const menuSide = document.querySelector('.menu-hide')
    let menuOpen = false


    menuBtn.addEventListener('click', () => {

        if (!menuOpen) {
            menuSide.classList.add('menu-show')
            menuOpen = true

            } else {
            menuSide.classList.remove('menu-show')
            menuOpen = false
                
        }
    })

