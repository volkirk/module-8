var text= document.querySelector('#href');
text.addEventListener('click' , function() {
    text.textContent=(prompt('Введите текст'));
    text.preventDefault();
})
