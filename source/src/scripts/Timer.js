const startButton = document.getElementById('start-btn');
const timerDisplayDuration = document.getElementById('timer_display_duration');
let timer;
let timerStatus = 'pomo';
let breakCounter = 0;
const SECOND = 1000;
// const LIGHT_COLOR = '#f3606060';
// const DARK_COLOR = '#f36060';

if (localStorage.getItem('pomo-length') === null) {
    localStorage.setItem('pomo-length', '25');
    localStorage.setItem('short-break-length', '5');
    localStorage.setItem('long-break-length', '15');
}
let pomoTime = localStorage.getItem('pomo-length');
let breakTime = localStorage.getItem('short-break-length');
let longBreakTime = localStorage.getItem('long-break-length');

timerDisplayDuration.innerHTML = `${pomoTime}:00`;

function switchMode() {
    const pomoButton = document.getElementById('pomo-btn');
    const breakButton = document.getElementById('break-btn');

    if (timerStatus === 'pomo' && breakCounter >= 3) {
        timerDisplayDuration.innerHTML = `${longBreakTime}:00`;
        if (pomoButton.getAttribute('class') !== 'toggle') {
            pomoButton.classList.toggle('toggle');
            breakButton.classList.toggle('toggle');
        }
        timerStatus = 'break';
        breakCounter = 0;
    } else if (timerStatus === 'pomo') {
        timerDisplayDuration.innerHTML = `${breakTime}:00`;
        if (pomoButton.getAttribute('class') !== 'toggle') {
            pomoButton.classList.toggle('toggle');
            breakButton.classList.toggle('toggle');
        }
        timerStatus = 'break';
        breakCounter += 1;
    } else {
        timerDisplayDuration.innerHTML = `${pomoTime}:00`;
        if (pomoButton.getAttribute('class') === 'toggle') {
            pomoButton.classList.toggle('toggle');
            breakButton.classList.toggle('toggle');
        }
        timerStatus = 'pomo';
    }
}

// function switchMode {
//     let pomoButton = document.getElementById("pomo-btn");
//     let breakButton = document.getElementById("break-btn");
//     if (timerStatus == "pomo" && breakCounter >= 3) {
//         timerDisplayDuration.innerHTML = longBreakTime + ":00";
//         pomoButton.style.backgroundColor = LIGHT_COLOR;
//         breakButton.style.backgroundColor = DARK_COLOR;
//         timerStatus = "break";
//         breakCounter = 0;
//     } else if (timerStatus == "pomo") {
//         timerDisplayDuration.innerHTML = breakTime + ":00";
//         pomoButton.style.backgroundColor = LIGHT_COLOR;
//         breakButton.style.backgroundColor = DARK_COLOR;
//         timerStatus = "break";
//         breakCounter++;
//     } else {
//         timerDisplayDuration.innerHTML = pomoTime + ":00";
//         pomoButton.style.backgroundColor = DARK_COLOR;
//         breakButton.style.backgroundColor = LIGHT_COLOR;
//         timerStatus = "pomo";
//     }
// }

async function timerFunction() {
    let timerText = timerDisplayDuration.innerHTML;

    if (timerText === '0:00') {
        switchMode();
        timerText = timerDisplayDuration.innerHTML;
    }

    let minutes = Number(timerText.substring(0, timerText.length - 3));
    let seconds = Number(timerText.substring(timerText.length - 2));

    if (!(seconds === 0)) {
        seconds -= 1;
    } else {
        seconds = 59;
        minutes -= 1;
    }

    if (seconds < 10) {
        seconds = `0${String(seconds)}`;
    }

    timerDisplayDuration.innerHTML = `${minutes}:${seconds}`;
}

async function start() {
    startButton.innerHTML = 'Stop';
    timer = setInterval(timerFunction, SECOND);
}

async function stop() {
    pomoTime = localStorage.getItem('pomo-length');
    breakTime = localStorage.getItem('short-break-length');
    longBreakTime = localStorage.getItem('long-break-length');
    clearInterval(timer);
    timerStatus = 'break';
    setTimeout(switchMode, SECOND / 10);
    breakCounter = 0;
    startButton.innerHTML = 'Start';
}

async function startAndStopButton() {
    if (startButton.innerHTML === 'Start') {
        start();
    } else {
        stop();
    }
}
startButton.addEventListener('click', startAndStopButton);
