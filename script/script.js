const corpo = document.querySelector('body');
const cor = document.querySelector('input');
const container = document.querySelector('.container');
const nenhum = '#aaf';
window.onload = mudarcor();
function mudarcor(){ 
    corpo.style.backgroundColor = `${cor.value}`;
    
};

