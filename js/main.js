let btnScroll = document.querySelector('.btn');
window.addEventListener('scroll', ScrollBtnFunction);
function ScrollBtnFunction (){
    btnScroll.classList.toggle('ScrollActive', scrollY > 0);
    let header = document.querySelector('header');
    header.classList.toggle('StickyHeader', scrollY > 500);
}
btnScroll.onclick = ClickBtnScrollFunction;
function ClickBtnScrollFunction (){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// hambuurger
let hambuurger = document.querySelector('.hamburger');
hambuurger.addEventListener('click', ClickHamburger);
function ClickHamburger (){
    let nav = document.querySelector('nav');
    nav.classList.toggle('clickNavEffect');
    hambuurger.classList.toggle('HamburgerStackPile');
}
// list Click
let li = document.querySelectorAll('li');
let ul = document.querySelector('ul');

li.forEach( current => {
    current.addEventListener('click', () => {
        ul = document.querySelector('.active').classList.remove('active');
        current.classList.toggle('active');
    })
});
// not actions button
let btnNotActios = document.getElementsByClassName('notActions');
for(let i = 0; i < btnNotActios.length; i++){
    btnNotActios[i].addEventListener('click', btnClickFunctions);
}
function btnClickFunctions(e){
    e.preventDefault();
    window.alert("Maaf, tombol ini masih belum bisa digunakan")
}