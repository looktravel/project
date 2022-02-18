
const modalModule = () => {
    const modal = document.querySelector('.header-modal');
    const btn = document.querySelector('.btn-warning');

    btn.addEventListener('click', () =>{
        console.log('click');
    })

   console.log(modal);
   console.log(btn);
   
}
export default modalModule