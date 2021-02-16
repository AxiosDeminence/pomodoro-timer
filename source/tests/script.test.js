/* eslint-disable global-require */
/* eslint-disable camelcase */

beforeEach(() => {
    jest.useFakeTimers();
});

test('Start/Stop the timer (reset function tested within)', () => {
    document.body.innerHTML = `
        <button id = "start-btn">Start</button>
        <div id="timer_display_duration">25:00</div>
    `;

    require('../src/scripts/script');

    const start_button = document.getElementById('start-btn');
    const display = document.getElementById('timer_display_duration');

    start_button.click();

    jest.advanceTimersByTime(5000);

    expect(start_button.innerHTML).toBe('Stop');
    expect(display.innerHTML).toBe('24:55');

    start_button.click();
    jest.advanceTimersByTime(100);

    expect(start_button.innerHTML).toBe('Start');
    expect(display.innerHTML).toBe('25:00');
});
