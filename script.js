//dark & light
   
var element = document.getElementById('element');

element.onclick = function(){
    document.body.classList.toggle('dark-mode');
        if(document.body.classList.contains('dark-mode')){
            element.src = 'sun.png';
        }else{
            element.src = 'moon.png';
        }
}

// Botão

const btnMob = document.getElementById('btn-mob');

function toggleMenu(event) {
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('navbar');
    /* toggle adiciona caso não tenha / remove caso tenha */
    nav.classList.toggle('on');
    const on = navbar.classList.contains('on')
    event.currentTarget.setAttribute('aria-expanded', on);
        if (on) {
            event.currentTarget.setAttribute('aria-label', 'Close Menu');
        } else {
            event.currentTarget.setAttribute('aria-label', 'Open Menu');
        }
}

btnMob.addEventListener('click', toggleMenu);
btnMob.addEventListener('touchstart', toggleMenu);
