1.0
const trafficLightEl = document.querySelector('#trafficLight');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}
function makeYellow() {
    trafficLightEl.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightEl.style.background = ('red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
}

trafficLightEl.addEventListener('click', makeGreen);


2.0

const trafficLight1 = document.querySelector('#trafficLight1');
const trafficLight2 = document.querySelector('#trafficLight2');
const trafficLight3 = document.querySelector('#trafficLight3');

function makeGreen2() {
    trafficLight3.style.background = ('black');
    trafficLight1.style.background = ('green');
    clear();
    trafficLight1.addEventListener('click', makeYellow2);
    trafficLight2.addEventListener('click', makeYellow2);
    trafficLight3.addEventListener('click', makeYellow2);
}
function makeYellow2() {
    trafficLight1.style.background = ('black');
    trafficLight2.style.background = ('yellow');
    clear();
    trafficLight1.addEventListener('click', makeRed2);
    trafficLight2.addEventListener('click', makeRed2);
    trafficLight3.addEventListener('click', makeRed2);
}

function makeRed2() {
    trafficLight2.style.background = ('black');
    trafficLight3.style.background = ('red');
    clear();
    trafficLight1.addEventListener('click', makeGreen2);
    trafficLight2.addEventListener('click', makeGreen2);
    trafficLight3.addEventListener('click', makeGreen2);
}
function clear(){
    trafficLight1.removeEventListener('click', makeRed2);
    trafficLight2.removeEventListener('click', makeRed2);
    trafficLight3.removeEventListener('click', makeRed2);
    trafficLight1.removeEventListener('click', makeGreen2);
    trafficLight2.removeEventListener('click', makeGreen2);
    trafficLight3.removeEventListener('click', makeGreen2);
    trafficLight1.removeEventListener('click', makeYellow2);
    trafficLight2.removeEventListener('click', makeYellow2);
    trafficLight3.removeEventListener('click', makeYellow2);
}

trafficLight1.addEventListener('click', makeGreen2);
trafficLight2.addEventListener('click', makeGreen2);
trafficLight3.addEventListener('click', makeGreen2);


