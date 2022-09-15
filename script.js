let startStopBtn = document.querySelector('#start-stop-button');
let resetBtn = document.querySelector('#reset-button');

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingZeroSeconds = 0;
let leadingZeroMinutes = 0;
let leadingZeroHours = 0;

let timerInterval = null;
let timerStatus = 'stopped';

function stopWatch() {
  leadingZeroSeconds = 0;
  leadingZeroMinutes = 0;
  leadingZeroHours = 0;
  seconds++;

  if (seconds === 60) {
    minutes++;
    seconds = 0;

    if (minutes === 60) {
      hours++;
      minutes = 0;
    }
  }

  leadingZeroSeconds =
    seconds < 10 ? leadingZeroSeconds.toString() + seconds : seconds;

  leadingZeroMinutes =
    minutes < 10 ? leadingZeroMinutes.toString() + minutes : minutes;

  leadingZeroHours =
    hours < 10
      ? leadingZeroHours.toString() + hours
      : (leadingZeroHours = hours);

  let displayTimer = (document.querySelector(
    '.timer'
  ).innerText = `${leadingZeroHours}:${leadingZeroMinutes}:${leadingZeroSeconds}`);
}

startStopBtn.addEventListener('click', () => {
  if (timerStatus === 'stopped') {
    timerInterval = setInterval(stopWatch, 1000);
    startStopBtn.innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
    timerStatus = 'started';
  } else {
    clearInterval(timerInterval);
    startStopBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = 'stopped';
  }
});

resetBtn.addEventListener('click', () => {
  clearInterval(timerInterval);

  seconds = 0;
  minutes = 0;
  hours = 0;

  document.querySelector('.timer').innerText = '00:00:00';
  startStopBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
  timerStatus = 'stopped';
});
