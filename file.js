/*
        Задание 1:

        Доработайте сценарий. 
        - При нажатии на кнопку стоп, анимация должна остановиться.
        - При нажатии на кнопку ускорить, анимация должна ускориться, при повторных нажатиях скорость анимации
          должна увеличиваться. 
        - При нажатии на кнопку "Замедлить" - анимация замедляется, при повторных нажатиях скорость становится
          меньше.
        */

// let element = document.querySelector("#element");
// let elementWidth = parseInt(getComputedStyle(element).width);
// let containerWidth = parseInt(getComputedStyle(document.querySelector("#container")).width);
// let isClickPlay = false;
// let setIntervaleId;
// let setIntervalTime = 40;
// let direction = "right";

// function moveLeft() {
//     element.style.left = getLeft(element) - 3 + "px";
// }

// function moveRight() {
//     element.style.left = getLeft(element) + 3 + "px";
// }

// function getLeft(e) {
//     return parseInt(getComputedStyle(e).left);
// }

// function move() {
//     if (getLeft(element) >= containerWidth - elementWidth) {
//         direction = "left";
//         console.log('direction = "left";');
//     }
//     if (getLeft(element) <= 0) {
//         direction = "right";
//         console.log('direction = "right"');
//     }

//     if (direction == "right") {
//         moveRight();
//     }
//     else {
//         moveLeft();
//     }
// }

// document.querySelector("#startBtn").addEventListener("click", handlerStart);

// document.querySelector("#stopBtn").addEventListener("click", handlerStop);

// document.querySelector("#increaseBtn").addEventListener("click", handlerIncrease);

// document.querySelector("#decreaseBtn").addEventListener("click", handlerDecrease);

// function handlerIncrease(){
//   if(isClickPlay == false){
//       return;
//   }

//   clearInterval(setIntervaleId);
//   setIntervaleId = setInterval(move, setIntervalTime /= 2);
// }

// function handlerDecrease(){
//   if(isClickPlay == false){
//       return;
//   }

//   clearInterval(setIntervaleId);
//   setIntervaleId = setInterval(move, setIntervalTime *= 2);
// }

// function handlerStop(){
//   if(isClickPlay == false){
//       return;
//   }
//     clearInterval(setIntervaleId);
//     isClickPlay = false;
//     setIntervalTime = 40;
// }

// function handlerStart() {
//   if(isClickPlay == true){
//       return;
//   }
//     setIntervaleId = setInterval(move, setIntervalTime);
//     isClickPlay= true;
// }

//////////////////////////////////////////////////////////////////////////////////////

/*
        Задание 2:
        Создайте функцию showWithDelay(массив);
        Метод принимает массив и на консоль по очереди выводит каждый элемент массива с интервалом в одну секунду
        Сделайте два варианта с setInterval и setTimeout
        */

// function showWithDelay1(array){
//   let current = 0;

//   let timer = setInterval(() => {
//     console.log(array[current]);
//     current++;

//     if(current == array.length){
//       clearInterval(timer);
//     }
//   }, 2000)
// };

// function showWithDelay2(array){

//   function show (index){
//     console.log(array[index]);
//     index++;

//     if(index < array.length){
//       setTimeout(show, 2000, index)
//     }
//   }

//   show(0);
// }
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// showWithDelay1(array);
// showWithDelay2(array);

//////////////////////////////////////////////////////////////////////////////////////

/*
        Задание 3:
        Найдите и исправьте проблему в методах getGreaterThanThreshold и getLessThanThreshold
        */

//     class Numbers  {
//       #values;
//       #threshold;

//       constructor(threshold, values) {
//           this.#values = values;
//           this.#threshold = threshold;
//       }

//       // Возвращает все значения из массива values, которые больше, чем значение переменной threshold
//       getGreaterThanThreshold() {
//         const threshold = this.#threshold;
//           return this.#values.filter(function (v) {
//               return v > threshold;
//           })
//       }

//       // возвращает все значения из массива values, которые меньше, чем значение переменной threshold
//       getLessThanThreshold() {
//         const threshold = this.#threshold;
//           return this.#values.filter(function (v) {
//               return v < threshold;
//           })
//       }
//   }

//   let numbers = new Numbers(50, [10, 20, 23, 11, 5, 6, 90, 33, 45, 67]);
//   let gt = numbers.getGreaterThanThreshold();
//   let lt = numbers.getLessThanThreshold();

//   console.log(gt);
//   console.log(lt);

//////////////////////////////////////////////////////////////////////////////////////

/*
        Задание 4:
        Найдите и исправьте ошибку, связанную с использованием контекста.
        */
// let taskNameInput = document.querySelector("#task-name-input");
// let addTaskButton = document.querySelector("#add-task-btn");
// let startMessage = document.querySelector("#start-message");
// let showAllButton = document.querySelector("#show-all-btn");
// let showNotCompletedButton = document.querySelector("#show-not-completed-btn");
// let taskList = document.querySelector(".task-list");

// let tasks = [];

// addTaskButton.addEventListener("click", addTaskHandler);
// showAllButton.addEventListener("click", showAllHandler);
// showNotCompletedButton.addEventListener("click", showNotCompletedHandler);

// taskNameInput.addEventListener("keydown", function (e) {
//     if (e.code == "Enter") addTaskHandler();
// })

// function addTaskHandler() {
//     if (taskNameInput.value) {
//         if (!startMessage.hidden) startMessage.hidden = true;

//         let newTask = new Task(taskNameInput.value);
//         newTask.createIn(taskList);
//         tasks.push(newTask);

//         taskNameInput.value = "";
//     } else {
//         alert("введите имя задачи");
//     }
// }

// function showAllHandler() {
//     taskList.innerHTML = "";
//     tasks.forEach(task => {
//         task.createIn(taskList);
//     });
// }

// function showNotCompletedHandler() {
//     taskList.innerHTML = "";
//     tasks
//         .filter(task => task.isDone == false)
//         .forEach(task => {
//             task.createIn(taskList);
//         });
// }

// class Task {
//     constructor(text) {
//         this.text = text;
//         this.isDone = false;
//         this.div = null;
//     }

//     createIn(element) {
//         this.div = document.createElement("div");
//         this.div.classList.add("task");

//         let input = document.createElement("input");
//         input.addEventListener("click",  () => this.changeState);
//         input.type = "checkbox";

//         let p = document.createElement("p");
//         p.innerText = this.text;

//         this.div.append(input);
//         this.div.append(p);

//         if (this.isDone) {
//             this.div.classList.add("completed");
//             input.checked = true;
//         }
//         element.append(this.div);
//     }

//     changeState(element) {
//         this.isDone = !this.isDone;
//         this.div.classList.toggle("completed");
//     }
// }

//////////////////////////////////////////////////////////////////////////////////////

/*
        Задание 5:
        Напишите сценарии "Игра 'Угадай число'". Суть игры - угадать за меньшее количество попыток число, которое загадал сценарий.
        Каждый раз, когда игрок пытается угадать число, сценарий выводит подсказку - меньшее или большее число было загадано сценарием.
        Сценарий загадывает число только один раз в начале игры и это число не меняется до завершения игры.
        При завершении игры выведите пользователю информацию о том, с какой попытки угадано значение и сколько было потрачено на это времени.

        Для генерации случайного числа используйте следующий код:
        let randomValue = Math.floor(Math.random() * 101); // случайное значение от 0 до 100 будет записано в переменную randomValue
        
        Пример игры:
        Сценарий: я загадал случайное значение от 0 до 100
        Пользователь: 50
        Сценарий: я загадал значение больше, чем 50
        Пользователь: 75
        Сценарий: я загадал значение меньше, чем 75
        Пользователь: 62
        Сценарий: я загадал значение меньше, чем 62
        Пользователь: 56
        Сценарий: Правильно! Загаданное значение 56. Вы угадали с 4й попытки за 10 сек
        */

let btnStartElement = document.querySelector('#btn-start');
let btnExitElement = document.querySelector('#btn-exit');
let timerElement = document.querySelector('#timer');
let messageElement = document.querySelector('#message');
let inputValueElement = document.querySelector('#input-value');
let btnPlayElement = document.querySelector('#btn-play');
let messageWinElement = document.querySelector('#message-win');

let idTimer;
let isBtnStartClick = false;
let randomValue;
let attempts = 0;
let minutes;
let seconds;




function messageStart() {
  return 'Odgadłem losową wartość od 0 do 100.';
}

function messageValueMore(value) {
  return "Я загадал значение больше, чем " + value;
}

function messageValueLess(value) {
  return "Я загадал значение меньше, чем " + value;
}

function messageWin(randomValue, attempts, elapsedTime) {
  return `Правильно! Загаданное значение ${randomValue}. Вы угадали с ${attempts} попытки за ${elapsedTime} сек.`
}

function setElementText(element, text){
  element.textContent = text;
}

function setOnlineTime(){
  let startTime = Date.now();
  idTimer = setInterval(() => {
    let endTime = Date.now();
    const difference = Math.floor((endTime - startTime) / 1000);
    minutes = Math.floor(difference / 60);
    seconds = difference % 60;
    let correctMinutes = minutes;
    let correctSeconds = seconds;
    if(minutes < 10){
      correctMinutes = '0' + minutes;
    }
    if(seconds < 10){
      correctSeconds = '0' + seconds;
    }
    let correctTime = `${correctMinutes}:${correctSeconds}`;
    setElementText(timerElement, correctTime)
  }, 1000);
}

function handlerStart(){
  if(!isBtnStartClick){
    randomValue = Math.floor(Math.random() * 101); 
    console.log(randomValue);
    setElementText(messageWinElement, '')
    setElementText(messageElement, messageStart());
    setOnlineTime();
    inputValueElement.removeAttribute('disabled')

    isBtnStartClick = true;
  }

}

btnStartElement.addEventListener('click', handlerStart);


function handlerExit(){
  if(isBtnStartClick){
    attempts = 0;
    clearInterval(idTimer);
    setElementText(timerElement, 'Time');
    inputValueElement.value = '';
    inputValueElement.setAttribute('disabled', true);
    isBtnStartClick = false;
    setElementText(messageWinElement, '')
    setElementText(messageElement, 'Kliknij przycisk \'Start\', aby rozpocząć grę')
  }


}
btnExitElement.addEventListener('click', handlerExit);

function handlerPlay(){
  if(!Number(inputValueElement.value)){
    return;
  } 
  attempts++;
  if(inputValueElement.value < randomValue){
    setElementText(messageElement, "Odgadłem znaczenie większe niż " + inputValueElement.value);
  }
  else if(inputValueElement.value > randomValue){
    setElementText(messageElement, "Domyśliłem się znaczenia mniej niż " + inputValueElement.value);
  }
  else{
    let correctMinutes = minutes == '0' ?  '': `${minutes} мин.`;
    let correctSeconds = seconds == '0' ?  '': `${seconds} сек.`;
    setElementText(messageWinElement, 'Prawidłowy!')
    setElementText(messageElement,`Zamierzone znaczenie ${randomValue}.Zgadłeś z ${attempts} zapotrzebowanie na ${correctMinutes} ${correctSeconds}`)
    clearInterval(idTimer);
    setElementText(timerElement, 'Time');
    attempts = 0;
  }
  inputValueElement.value = '';
}
btnPlayElement.addEventListener('click', handlerPlay);
// TODO:
// + 1.оживити кнопку play- повісити на неї addEventListener. 
// + 2.добавити randomNumber в function handlerStart.
// + 3.Порівнятя value інпута з загаденим числом.
// + 4. якщо збіг:
// + 5. якщо не збіг:
// 6. коли user вгадав число видалити input з сторінки і кнопку play поміняти текст на 'New game'
// Addition:
// 1. коли user вписує букви в input вивести повідомлення що можна тільки цифри
// 2. оставити лише одну кнопку,на початку є кнопка з текстом start , після того коли юзер натиснув на старт поміняти текст кнопки старт на ексіт,а коли юзер вгадав число поміняти текст кнопки ексіт на нова гра



