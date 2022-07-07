// Fonction pour afficher le menu mobile

let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function(){
    body.classList.toggle('nav-open');
})

