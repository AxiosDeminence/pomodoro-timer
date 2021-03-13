const startButton = document.getElementById('start-btn');
const timerDisplayDuration = document.getElementById('timer_display_duration');
let timer;
let timerStatus = 'pomo';
const btnSound = new Audio('./icons/btnClick.mp3');
// let pomoTime = localStorage.getItem('pomo-length');
// let breakTime = localStorage.getItem('short-break-length');
// let longBreakTime = localStorage.getItem('long-break-length');
let breakCounter = 0;
const SECOND = 1000;
const alarmSound = new Audio('./icons/alarm.mp3');
const LIGHT_COLOR = '#f3606060';
const DARK_COLOR = '#f36060';

if (localStorage.getItem('pomo-length') === null) {
    localStorage.setItem('pomo-length', '25');
    localStorage.setItem('short-break-length', '5');
    localStorage.setItem('long-break-length', '15');
}
let pomoTime = localStorage.getItem('pomo-length');
let breakTime = localStorage.getItem('short-break-length');
let longBreakTime = localStorage.getItem('long-break-length');

timerDisplayDuration.innerHTML = `${pomoTime}:00`;

let stopCheck = setInterval(stopChecker, 500);

async function stopChecker() {
    if (localStorage.getItem('stop') == 'true') {
        stop();
        localStorage.setItem('stop', 'false');
    } 
}

async function start() {
    startButton.innerHTML = 'Stop';
    timer = setInterval(timer_function, SECOND);
}

async function stop() {
    pomoTime = localStorage.getItem('pomo-length');
    breakTime = localStorage.getItem('short-break-length');
    longBreakTime = localStorage.getItem('long-break-length');
    clearInterval(timer);
    setTimeout(reset_timer, SECOND / 10);
    startButton.innerHTML = 'Start';
}

async function startAndStopButton() {
    btnSound.play();
    if (startButton.innerHTML === 'Start') {
        start();
    } else {
        stop();
    }
}

async function timer_function() {
    let timer_text = timerDisplayDuration.innerHTML;

    if (timer_text === '0:00') {
        switch_mode();
        timer_text = timerDisplayDuration.innerHTML;
    }
    if (timer_text === '0:01') {
        alarmSound.play();
    }

    let minutes = Number(timer_text.substring(0, timer_text.length - 3));
    let seconds = Number(timer_text.substring(timer_text.length - 2));

    if (!seconds == 0) {
        seconds--;
    } else {
        seconds = 59;
        minutes--;
    }

    if (seconds < 10) {
        seconds = `0${String(seconds)}`;
    }

    timerDisplayDuration.innerHTML = `${minutes}:${seconds}`;
}

function reset_timer() {
    timerDisplayDuration.innerHTML = `${pomoTime}:00`;
    timerStatus = 'pomo';
}

function switch_mode() {
    const pomoButton = document.getElementById('pomo-btn');
    const breakButton = document.getElementById('break-btn');
    if (timerStatus === 'pomo' && breakCounter >= 3) {
        timerDisplayDuration.innerHTML = `${longBreakTime}:00`;
        pomoButton.style.backgroundColor = LIGHT_COLOR;
        breakButton.style.backgroundColor = DARK_COLOR;
        timerStatus = 'break';
        breakCounter = 0;
    } else if (timerStatus === 'pomo') {
        timerDisplayDuration.innerHTML = `${breakTime}:00`;
        pomoButton.style.backgroundColor = LIGHT_COLOR;
        breakButton.style.backgroundColor = DARK_COLOR;
        timerStatus = 'break';
        breakCounter++;
    } else {
        timerDisplayDuration.innerHTML = `${pomoTime}:00`;
        pomoButton.style.backgroundColor = DARK_COLOR;
        breakButton.style.backgroundColor = LIGHT_COLOR;
        timerStatus = 'pomo';
    }
}

startButton.addEventListener('click', startAndStopButton);
/*
window.addEventListener('keydown', (event) => {
    const addDis = document.querySelector('task-popup').shadowRoot.getElementById('add-task-popup').style.display;
    const setDis = document.querySelector('settings-popup').shadowRoot.getElementById('settings-confirm-popup').style.display;
    const resDis = document.querySelector('reset-popup').shadowRoot.getElementById('reset-confirm-popup').style.display;
    if (!addDis || addDis === 'none') {
        switch (event.code) {
        
        default:
        }
    }
});
*/
window.addEventListener('keyup', (event) => {
    const addDis = document.querySelector('task-popup').shadowRoot.getElementById('add-task-popup').style.display;
    const setDis = document.querySelector('settings-popup').shadowRoot.getElementById('settings-confirm-popup').style.display;
    const resDis = document.querySelector('reset-popup').shadowRoot.getElementById('reset-confirm-popup').style.display;
    if (!addDis || addDis === 'none') {
        switch (event.code) {
            case 'KeyS':
                startButton.click();
                break;
            case 'KeyR':
                document.getElementById('reset-button').click();
                break;
            case 'KeyH':
                document.getElementById('help-button').click();
                break;
            case 'Semicolon':
                document.getElementById('setting-button').click();
                break;
            case 'Escape':
                if (setDis === 'block') {
                    document.querySelector('body > settings-popup').shadowRoot.querySelector('#cancel-settings-btn').click();
                } else if (resDis === 'block') {
                    document.querySelector('body > reset-popup').shadowRoot.querySelector('#close-icon').click();
                }
                break;
            case 'KeyA':
                document.getElementById('task-popup-btn').click();
                break;
            case 'Enter':
                if (setDis === 'block') {
                    document.querySelector('body > settings-popup').shadowRoot.querySelector('#confirm-settings-btn').click();
                } else if (resDis === 'block') {
                    document.querySelector('body > reset-popup').shadowRoot.querySelector('#confirm-reset-btn').click();
                }
                break;
            default:
                break;
        }
    }
    else if (addDis === 'block') {
        if (event.code === 'Enter') {
            document.querySelector("body > task-popup").shadowRoot.querySelector("#add-task-btn").click();
        } else if (event.code === 'Escape') {
            document.querySelector("body > task-popup").shadowRoot.querySelector("#close-icon").click();
        } else {
        }
    } else {
    }
});
