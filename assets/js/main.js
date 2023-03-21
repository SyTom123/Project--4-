// first modal
var btnOpen = [];
var btnClosed = [];
var modal = [];
var modalClose = [];
var btnBuyNow = [];
for(var i = 0; i <= 10; i++){
    btnOpen[i] = document.querySelector(`#btn-Open--${i}`);
    btnClosed[i] = document.querySelector(`#my-modal__icon--${i}`);
    modal[i] = document.querySelector(`#my-modal--${i}`);
    modalClose[i] = document.querySelector(`#my-modal__closed--${i}`);
    btnBuyNow[i] = document.querySelector(`#button--${i}`);
}

function opened(i){
    modal[i].classList.remove('closed');
    modal[i].classList.add('opened');
}
function closedd(i){
    modal[i].classList.remove('opened');
    modal[i].classList.add('closed');
}
btnClosed[0].addEventListener('click',function(){
    closedd(0);});
modalClose[0].addEventListener('click',function(){
    closedd(0);});
btnBuyNow[0].addEventListener('click',function(){
    closedd(0);});

btnClosed[1].addEventListener('click',function(){
    closedd(1);});
modalClose[1].addEventListener('click',function(){
    closedd(1);});
btnBuyNow[1].addEventListener('click',function(){
    closedd(1);});

btnClosed[2].addEventListener('click',function(){
    closedd(2);});
modalClose[2].addEventListener('click',function(){
    closedd(1);});
btnBuyNow[2].addEventListener('click',function(){
    closedd(2);});

btnClosed[5].addEventListener('click',function(){
    closedd(5);});
modalClose[5].addEventListener('click',function(){
    closedd(5);});

btnClosed[6].addEventListener('click',function(){
    closedd(6);});
modalClose[6].addEventListener('click',function(){
    closedd(6);});

btnClosed[7].addEventListener('click',function(){
    closedd(7);});
modalClose[7].addEventListener('click',function(){
    closedd(7);});

btnClosed[8].addEventListener('click',function(){
    closedd(8);});
modalClose[8].addEventListener('click',function(){
    closedd(8);});

btnClosed[9].addEventListener('click',function(){
    closedd(9);});
modalClose[9].addEventListener('click',function(){
    closedd(9);});

btnClosed[10].addEventListener('click',function(){
    closedd(10);});
modalClose[10].addEventListener('click',function(){
    closedd(10);});

for(var i = 0; i <= 10; i++){
    if (i == 0 || i == 2){
        btnOpen[i].addEventListener('click',function(){
            opened(0);});
    }
    if(i == 1 || i == 3){
        btnOpen[i].addEventListener('click',function(){
            opened(1);});
    }
    if(i == 4){
        btnOpen[i].addEventListener('click',function(){
            opened(2);});
    } 
    if(i == 5){
        btnOpen[i].addEventListener('click',function(){
            opened(5);});
    } 
    if(i == 6){
        btnOpen[i].addEventListener('click',function(){
            opened(6);});
    } 
    if(i == 7){
        btnOpen[i].addEventListener('click',function(){
            opened(7);});
    }
    if(i == 8){
        btnOpen[i].addEventListener('click',function(){
            opened(8);});
    }
    if(i == 9){
        btnOpen[i].addEventListener('click',function(){
            opened(9);});
    }
    if(i == 10){
        btnOpen[i].addEventListener('click',function(){
            opened(10);});
    }  
}

// End first modal