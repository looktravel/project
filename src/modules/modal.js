
const modalModule = () => {
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay')
    const modal = document.querySelector('.header-modal')
    const modalServices = document.querySelector('.services-modal')

    body.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-warning')){
            
             modal.style.display = 'flex'
             overlay.style.display = 'flex'
        }
        if (e.target.classList.contains('btn-success')){
            
             modalServices.style.display = 'flex'
             overlay.style.display = 'flex'
        }
        if (e.target.classList.contains('header-modal__close') || e.target.classList.contains('services-modal__close')){
            modalServices.style.display = 'none'
            modal.style.display = 'none'
            overlay.style.display = 'none'
        }
        
    })

    
}
export default modalModule