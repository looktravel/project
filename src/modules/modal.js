
const modalModule = () => {
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay')
    const modal = document.querySelector('.header-modal')

    body.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-warning')){
         
         modal.style.display = 'flex'
         overlay.style.display = 'flex'
        }
        if (e.target.classList.contains('header-modal__close')){
         
            modal.style.display = 'none'
            overlay.style.display = 'none'
           }
    })

    
}
export default modalModule