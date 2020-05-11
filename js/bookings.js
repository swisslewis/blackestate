function modalDisplay() {
    var modalBtn = document.getElementById('modal-button')
    var modalBg = document.querySelector('.modal-bg')
    var modalClose = document.querySelector('.modal-close')

    modalBtn.addEventListener('click', function(e){
        modalBg.classList.add('modal-active')
        e.preventDefault()
    })

    modalClose.addEventListener('click', function(){
        modalBg.classList.remove('modal-active')
    })
}

modalDisplay()