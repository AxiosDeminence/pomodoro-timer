const startButton = document.getElementById('start-btn');
const timerDisplayDuration = document.getElementById('timer_display_duration');
const btnSound = new Audio('./icons/btnClick.mp3');
const alarmSound = new Audio('./icons/alarm.mp3');
const SECOND = 1000;
let timer;
let timerStatus = 'pomo';
let breakCounter = 0;

// assign default session lengths to local storage
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

async function timerFunction() {
    let timerText = timerDisplayDuration.innerHTML;

    if (timerText === '0:00') {
        switchMode();
        timerText = timerDisplayDuration.innerHTML;
    }

    if (timerText === '0:01') {
        alarmSound.volume = 0.01 * parseInt(localStorage.getItem('volume'), 10);
        // console.log(alarmSound.volume);
        alarmSound.play();
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
    btnSound.volume = 0.01 * parseInt(localStorage.getItem('volume'), 10);
    btnSound.play();
    if (startButton.innerHTML === 'Start') {
        start();
    } else {
        stop();
    }
}
startButton.addEventListener('click', startAndStopButton);
// keyboard event stuff
window.addEventListener('keyup', (event) => {
    const addDis = document.querySelector('task-popup').shadowRoot.getElementById('add-task-popup').style.display;
    const setDis = document.querySelector('settings-popup').shadowRoot.getElementById('settings-confirm-popup').style.display;
    const resDis = document.querySelector('reset-popup').shadowRoot.getElementById('reset-confirm-popup').style.display;
    const helpDis = document.querySelector('help-popup').shadowRoot.getElementById('help-popup').style.display;
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
                document.querySelector('body > settings-popup').shadowRoot.querySelector('#close-icon').click();
            } else if (resDis === 'block') {
                document.querySelector('body > reset-popup').shadowRoot.querySelector('#close-icon').click();
            } else if (helpDis === 'block') {
                document.querySelector('body > help-popup').shadowRoot.querySelector('#close-icon').click();
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
        }
    }
});
