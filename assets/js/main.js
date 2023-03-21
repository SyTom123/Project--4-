var modal = document.querySelector(".dataModa");
var btnOpen = document.querySelector(".btnOpen");
const modalOpenFunc = function(){
    modal.classList.add('opened');
}
//modal eventListener
btnOpen.addEventListener('click',modalOpenFunc);
