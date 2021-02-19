let startButton = document.getElementById("start-btn");
let timerDisplayDuration = document.getElementById("timer_display_duration");
let timer;
let thisStorage = window.localStorage;
const POMO_TIME = "25:00";
const BREAK_TIME = "5:00"
const SECOND = 1000;
thisStorage.setItem("status", "pomo");

startButton.onclick = startAndStopButton;

async function startAndStopButton() {
    if (startButton.innerHTML == "Start") {
        startButton.innerHTML = "Stop";
        timer = setInterval(timer_function, SECOND);
    } else {
        clearInterval(timer);
        setTimeout(reset_time, SECOND/10);
        startButton.innerHTML = "Start";
    }
}

async function timer_function() {
    let timer_text = timerDisplayDuration.innerHTML;

    if (timer_text == "0:00") {
        switch_time();
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
    minutes = String(minutes);

    timerDisplayDuration.innerHTML = minutes + ":" + seconds;
}

function reset_time() {
    timerDisplayDuration.innerHTML = POMO_TIME;
    thisStorage.setItem("status", "pomo");
}

function switch_time() {
    if (thisStorage.getItem("status") == "pomo") {
        timerDisplayDuration.innerHTML = BREAK_TIME;
        thisStorage.setItem("status", "break");
    } else {
        timerDisplayDuration.innerHTML = POMO_TIME;
        thisStorage.setItem("status", "pomo");
    }
}