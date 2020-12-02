const  CL = document.querySelector('#consoleLog');
CL.addEventListener('click', function () {
  // тело обработчика
  alert ('Метод для вывода сообщения в веб-консоль')
  // конец тела обработчика
})

const  Alert = document.querySelector('#alert');
Alert.addEventListener('click', function() {
  // тело обработчика
  alert ('Функция alert() предназначена для вывода в браузере предупреждающего модального диалогового окна с некоторым сообщением и кнопкой «ОК»')
  // конец тела обработчика
})

const  Prompt = document.querySelector('#prompt');
Prompt.addEventListener('click', function(){
  // тело обработчика
  alert ('Метод prompt() предназначен для вывода диалогового окна с сообщением, текстовым полем для ввода данных и кнопками «ОК» и «Отмена»')
  // конец тела обработчика
})

