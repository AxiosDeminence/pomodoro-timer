const startButton = document.getElementById("start-btn");
const timerDisplayDuration = document.getElementById("timer_display_duration");
const DEFAULT_TIME = "25:00";
const SECOND = 1000;
let btnSound = new Audio("../icons/btnClick.mp3");
let alarmSound = new Audio("../icons/alarm.mp3");
let timer;

startButton.onclick = startAndStopButton;

window.addEventListener("keydown", function(event){
    if(event.code=='KeyS'){
        startAndStopButton();
    }
    else if(event.code=='KeyR'){
        reset_time();
    }
});
/**
 * Test header for automatic jsdoc generation
 */
async function startAndStopButton() {
    btnSound.play();
    if (startButton.innerHTML == "Start") {
        startButton.innerHTML = "Stop";
        timer = setInterval(timer_function, SECOND);
    } else {
        clearInterval(timer);
        setTimeout(reset_time, SECOND / 10);
        startButton.innerHTML = "Start";
    }
}

async function timer_function() {
    const timer_text = timerDisplayDuration.innerHTML;
    let minutes = Number(timer_text.substring(0, timer_text.length - 3));
    let seconds = Number(timer_text.substring(timer_text.length - 2));

    if (timer_text == "0:00") {
        alarmSound.play();
        await startAndStopButton();
        return;
    }

    if (!seconds == 0) {
        seconds--;
    } else {
        seconds = 59;
        minutes--;
    }

    if (seconds < 10) {
        seconds = `0${String(seconds)}`;
    }
    minutes = String(minutes);

    timerDisplayDuration.innerHTML = `${minutes}:${seconds}`;
}

function reset_time() {
    btnSound.play();
    timerDisplayDuration.innerHTML = DEFAULT_TIME;
}
