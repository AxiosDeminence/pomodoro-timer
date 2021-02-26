beforeEach(() => {
    jest.useFakeTimers();
    // expect.hasAssertions();
});

afterEach(() => {
    jest.resetModules();
    jest.clearAllTimers();
});

test('start timer function', () => {
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
});

test('Stop and reset function', () => {
    document.body.innerHTML = `
        <button id = "start-btn">Stop</button>
        <div id="timer_display_duration">13:00</div>
    `;

    require('../src/scripts/script');

    const start_button = document.getElementById('start-btn');
    const display = document.getElementById('timer_display_duration');

    start_button.click();
    jest.advanceTimersByTime(100);

    expect(start_button.innerHTML).toBe('Start');
    expect(display.innerHTML).toBe('25:00');
});

test('advance in time', () => {
    document.body.innerHTML = `
        <button id = "start-btn">Start</button>
        <div id="timer_display_duration">25:00</div>
    `;

    require('../src/scripts/script');

    // const mockStart = jest.fn();
    const start_button = document.getElementById('start-btn');
    const display = document.getElementById('timer_display_duration');

    start_button.click();

    // advance by 00:05
    jest.advanceTimersByTime(5000);
    expect(display.innerHTML).toBe('24:55');

    // advance by 00:55
    jest.advanceTimersByTime(55000);
    expect(display.innerHTML).toBe('24:00');

    jest.advanceTimersByTime(1000);
    expect(display.innerHTML).toBe('23:59');

    // advance by 23:00
    jest.advanceTimersByTime(1380000);
    expect(display.innerHTML).toBe('0:59');

    jest.advanceTimersByTime(59000);
    expect(display.innerHTML).toBe('0:00');
});

test('times up', async () => {
    document.body.innerHTML = `
        <button id = "start-btn">Start</button>
        <div id="timer_display_duration">0:01</div>
    `;

    require('../src/scripts/script');

    const start_button = document.getElementById('start-btn');
    const display = document.getElementById('timer_display_duration');

    start_button.click();
    jest.advanceTimersByTime(1000);
    expect(display.innerHTML).toBe('0:00');

    jest.advanceTimersByTime(1100);
    expect(start_button.innerHTML).toBe('Start');
    expect(display.innerHTML).toBe('25:00');
});
