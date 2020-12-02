// const button = document.querySelector('button');
// var input = document.querySelector('input');
// var log = document.querySelector('#duplicateField')

// input.addEventListener('keydown', logkey);
// button.addEventListener('click', sub);

// function logkey (e){
//     log.textContent += `${e.key}`;
// }

// function sub(){
//     console.log(document.querySelector('#duplicateField'));
//     log='';
//     input='';
//     input.value='';  
// }

var input = document.querySelector('input');
var duplicate =document.querySelector('#duplicateField');
var placeholder = ''
input.addEventListener('keydown', function(e){
    duplicate.textContent+=`${e.key}`;
    placeholder+= `${e.key}`;
})
const button=document.querySelector('button');
button.addEventListener('click', function(){
    console.log(placeholder);
    input.value='';
    duplicate.textContent='';
})




