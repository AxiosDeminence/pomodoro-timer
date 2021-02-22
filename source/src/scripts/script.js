let startButton = document.getElementById("start-btn");
let timerDisplayDuration = document.getElementById("timer_display_duration");
let timer;
let timerStatus = "pomo"
const POMO_TIME = "25:00";
const BREAK_TIME = "5:00"
const SECOND = 1000;
const LIGHT_COLOR = "#f3606060";
const DARK_COLOR = "#f36060";

startButton.onclick = startAndStopButton;

async function startAndStopButton() {
    if (startButton.innerHTML == "Start") {
        startButton.innerHTML = "Stop";
        timer = setInterval(timer_function, SECOND);
    } else {
        clearInterval(timer);
        setTimeout(reset_timer, SECOND/10);
        startButton.innerHTML = "Start";
    }
}

async function timer_function() {
    let timer_text = timerDisplayDuration.innerHTML;

    if (timer_text == "0:00") {
        switch_mode();
        timer_text = timerDisplayDuration.innerHTML;
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
        seconds = "0" + String(seconds);
    }

    timerDisplayDuration.innerHTML = minutes + ":" + seconds;
}

function reset_timer() {
    timerDisplayDuration.innerHTML = POMO_TIME;
    timerStatus = "pomo";
}

function switch_mode() {
    let pomoButton = document.getElementById("pomo-btn");
    let breakButton = document.getElementById("break-btn");
    if (timerStatus == "pomo") {
        timerDisplayDuration.innerHTML = BREAK_TIME;
        pomoButton.style.backgroundColor = LIGHT_COLOR;
        breakButton.style.backgroundColor = DARK_COLOR;
        timerStatus = "break";
    } else {
        timerDisplayDuration.innerHTML = POMO_TIME;
        pomoButton.style.backgroundColor = DARK_COLOR;
        breakButton.style.backgroundColor = LIGHT_COLOR;
        timerStatus = "pomo";
    }
}