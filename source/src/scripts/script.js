/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
const start_button = document.getElementById('start-btn');
const timer_display_duration = document.getElementById('timer_display_duration');
const DEFAULT_TIME = '25:00';
const SECOND = 1000;
let timer;

start_button.onclick = start_and_stop_button;

async function start_and_stop_button() {
    if (start_button.innerHTML == 'Start') {
        start_button.innerHTML = 'Stop';
        timer = setInterval(timer_function, SECOND);
    } else {
        clearInterval(timer);
        setTimeout(reset_time, SECOND / 10);
        start_button.innerHTML = 'Start';
    }
}

async function timer_function() {
    const timer_text = timer_display_duration.innerHTML;
    let minutes = Number(timer_text.substring(0, timer_text.length - 3));
    let seconds = Number(timer_text.substring(timer_text.length - 2));

    if (timer_text == '0:00') {
        await start_and_stop_button();
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

    timer_display_duration.innerHTML = `${minutes}:${seconds}`;
}

function reset_time() {
    timer_display_duration.innerHTML = DEFAULT_TIME;
}
