require('regenerator-runtime/runtime');
import ResetPopUp from '../src/components/ResetPopUp';
import SettingsPopUp from '../src/components/SettingsPopUp';
import TaskPopUp from '../src/components/TaskPopUp.js';



window.HTMLMediaElement.prototype.play = () => { /* do nothing */ };

beforeEach(() => {
    jest.useFakeTimers();
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

    require('../src/scripts/Timer');

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

    require('../src/scripts/Timer');

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

    require('../src/scripts/Timer');

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

describe(('switch mode'), () => {
    beforeEach(() => {
        jest.useFakeTimers();
        localStorage.setItem('pomo-length', '3');
        localStorage.setItem('short-break-length', '1');
        localStorage.setItem('long-break-length', '2');
    });

    afterEach(() => {
        jest.resetModules();
        jest.clearAllTimers();
        localStorage.clear();
    });

    test('pomo section ends', async () => {
        document.body.innerHTML = `
            <button id = "start-btn">Start</button>
            <div id="timer_display_duration">0:01</div>
            <button id = "pomo-btn"> Pomo</button>
            <button style="background-color: #f3606060;" id = "break-btn"> Break</button>
        `;

        require('../src/scripts/Timer');

        const startButton = document.getElementById('start-btn');
        const display = document.getElementById('timer_display_duration');
        const pomoButton = document.getElementById('pomo-btn');
        const breakButton = document.getElementById('break-btn');

        startButton.click();
        jest.advanceTimersByTime(180000);
        expect(display.innerHTML).toBe('0:00');
        jest.runOnlyPendingTimers();
        expect(display.innerHTML).toBe('0:59');

        const pomoColor = getComputedStyle(pomoButton);
        const breakColor = getComputedStyle(breakButton);

        expect(breakColor.backgroundColor).toBe('rgb(243, 96, 96)');
        expect(pomoColor.backgroundColor).toBe('rgba(243, 96, 96, 0.376)');
    });

    test('break section ends', async () => {
        document.body.innerHTML = `
            <button id = "start-btn">Start</button>
            <div id="timer_display_duration">0:01</div>
            <button id = "pomo-btn"> Pomo</button>
            <button style="background-color: #f3606060;" id = "break-btn"> Break</button>
        `;

        require('../src/scripts/Timer');

        const startButton = document.getElementById('start-btn');
        const display = document.getElementById('timer_display_duration');
        const pomoButton = document.getElementById('pomo-btn');
        const breakButton = document.getElementById('break-btn');

        startButton.click();
        jest.advanceTimersByTime(180000);
        expect(display.innerHTML).toBe('0:00');
        jest.advanceTimersByTime(60000);
        expect(display.innerHTML).toBe('0:00');
        jest.runOnlyPendingTimers();
        expect(display.innerHTML).toBe('2:59');

        const pomoColor = getComputedStyle(pomoButton);
        const breakColor = getComputedStyle(breakButton);

        expect(pomoColor.backgroundColor).toBe('rgb(243, 96, 96)');
        expect(breakColor.backgroundColor).toBe('rgba(243, 96, 96, 0.376)');
    });

    test('switch to long break', () => {
        document.body.innerHTML = `
            <button id = "start-btn">Start</button>
            <div id="timer_display_duration">0:01</div>
            <button id = "pomo-btn"> Pomo</button>
            <button style="background-color: #f3606060;" id = "break-btn"> Break</button>
        `;

        require('../src/scripts/Timer');

        const startButton = document.getElementById('start-btn');
        const display = document.getElementById('timer_display_duration');

        startButton.click();
        // 0
        jest.advanceTimersByTime(180000);
        jest.advanceTimersByTime(60000);
        // 1
        jest.advanceTimersByTime(180000);
        jest.advanceTimersByTime(60000);
        // 2
        jest.advanceTimersByTime(180000);
        jest.advanceTimersByTime(60000);
        // 3
        jest.advanceTimersByTime(180000);
        jest.runOnlyPendingTimers();
        expect(display.innerHTML).toBe('1:59');
    });
});

describe(('keyboard input'), () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });
    
    afterEach(() => {
        jest.resetModules();
        jest.clearAllTimers();
    });

    test(('key press S starts the timer'), () => {
        document.body.innerHTML = `
            <button id = "start-btn">Start</button>
            <div id="timer_display_duration">25:00</div>
            <ul id="task-list-elements">
            </ul>
            <div id="popup-button">
                <button id="task-popup-btn"> <img src="../icons/plus.svg" id="plus"></button>
            </div>
        `;

        require('../src/scripts/Timer');

        const popUp = document.createElement('task-popup');
        popUp.shadowRoot.getElementById('add-task-popup').setAttribute('style', 'display:none');
        document.body.appendChild(popUp);

        let eventObj = document.createEventObject ? document.createEventObject() : document.createEvent('Events');
        if (eventObj.initEvent) {
            eventObj.initEvent('keydown', true, true);
        }
        eventObj.code = 'KeyS';
        document.body.dispatchEvent(eventObj);   

        const start_button = document.getElementById('start-btn');
        const display = document.getElementById('timer_display_duration');

        jest.advanceTimersByTime(5000);

        expect(start_button.innerHTML).toBe('Stop');
        expect(display.innerHTML).toBe('24:55');
    });

    test(('key press S stops the timer'), () => {
        document.body.innerHTML = `
            <button id = "start-btn">Stop</button>
            <div id="timer_display_duration">23:00</div>
            <ul id="task-list-elements">
            </ul>
            <div id="popup-button">
                <button id="task-popup-btn"> <img src="../icons/plus.svg" id="plus"></button>
            </div>
        `;

        require('../src/scripts/Timer');

        const popUp = document.createElement('task-popup');
        popUp.shadowRoot.getElementById('add-task-popup').setAttribute('style', 'display:none');
        document.body.appendChild(popUp);

        let eventObj = document.createEventObject ? document.createEventObject() : document.createEvent('Events');
        if (eventObj.initEvent) {
            eventObj.initEvent('keydown', true, true);
        }
        eventObj.code = 'KeyS';
        document.body.dispatchEvent(eventObj);   

        const start_button = document.getElementById('start-btn');
        const display = document.getElementById('timer_display_duration');

        jest.advanceTimersByTime(5000);

        expect(start_button.innerHTML).toBe('Start');
        expect(display.innerHTML).toBe('25:00');
    });

    /*
    help button has not been implemented yet
    */
    test(('key press H opens help pop-up'), () => {

        document.body.innerHTML = `
            <button id = "start-btn">Stop</button>
            <div id="timer_display_duration">23:00</div>
            <button class="top-buttons" id="help-button">
                <img src="../icons/help.svg" id="help" class="top-button-img" alt="help">
                <p class="top-button-text" id="text-help">Help</p>
            </button>
        `;

        require('../src/scripts/Timer');

        const popUp = document.createElement('task-popup');
        popUp.shadowRoot.getElementById('add-task-popup').setAttribute('style', 'display:none');
        document.body.appendChild(popUp);

        let eventObj = document.createEventObject ? document.createEventObject() : document.createEvent('Events');
        if (eventObj.initEvent) {
            eventObj.initEvent('keydown', true, true);
        }
        eventObj.code = 'KeyH';
        document.body.dispatchEvent(eventObj);   

        expect(true).toBe(true);

    });

    test(('key press R opens reset pop-up'), () => {

        document.body.innerHTML = `
            <button id = "start-btn">Stop</button>
            <div id="timer_display_duration">23:00</div>
            <button class="top-buttons" id="reset-button">
                <img src="../icons/reset.svg" id="reset" class="top-button-img" alt="reset">
                <p class="top-button-text">Reset</p>
            </button>
        `;

        require('../src/scripts/Timer');

        const popUp = document.createElement('task-popup');
        popUp.shadowRoot.getElementById('add-task-popup').setAttribute('style', 'display:none');
        document.body.appendChild(popUp);

        const resetPopUp = document.createElement('reset-popup');
        document.body.appendChild(resetPopUp);

        let eventObj = document.createEventObject ? document.createEventObject() : document.createEvent('Events');
        if (eventObj.initEvent) {
            eventObj.initEvent('keydown', true, true);
        }
        eventObj.code = 'KeyR';
        document.body.dispatchEvent(eventObj);   
        
        const dispaly = getComputedStyle(resetPopUp.shadowRoot.getElementById('reset-confirm-popup'));
        expect(dispaly.display).toBe('block');

    });

    test(('key press ; opens setting pop-up'), () => {

        document.body.innerHTML = `
            <button id = "start-btn">Stop</button>
            <div id="timer_display_duration">23:00</div>
            <button class="top-buttons" id="setting-button">
                <img src="../icons/settings.svg" id="gear" class="top-button-img" alt="gear">
                <p class="top-button-text">Setting</p>
            </button>
        `;

        require('../src/scripts/Timer');

        const popUp = document.createElement('task-popup');
        popUp.shadowRoot.getElementById('add-task-popup').setAttribute('style', 'display:none');
        document.body.appendChild(popUp);

        const settingsPopUp = document.createElement('settings-popup');
        document.body.appendChild(settingsPopUp);

        let eventObj = document.createEventObject ? document.createEventObject() : document.createEvent('Events');
        if (eventObj.initEvent) {
            eventObj.initEvent('keydown', true, true);
        }
        eventObj.code = 'Semicolon';
        document.body.dispatchEvent(eventObj); 

        const display = getComputedStyle(settingsPopUp.shadowRoot.getElementById('settings-confirm-popup'));

        expect(display.display).toBe('block');

    });

    test(('key press A opens add-task pop-up'), () => {

        document.body.innerHTML = `
            <button id = "start-btn">Stop</button>
            <div id="timer_display_duration">23:00</div>
            <button id="task-popup-btn"> <img src="../icons/plus.svg" id="plus"></button>
        `;

        require('../src/scripts/Timer');

        const popUp = document.createElement('task-popup');
        popUp.shadowRoot.getElementById('add-task-popup').setAttribute('style', 'display:none');
        document.body.appendChild(popUp);

        const taskPopUp = document.createElement('task-popup');
        document.body.appendChild(taskPopUp);


        let eventObj = document.createEventObject ? document.createEventObject() : document.createEvent('Events');
        if (eventObj.initEvent) {
            eventObj.initEvent('keyup', true, true);
        }
        eventObj.code = 'KeyA';
        document.body.dispatchEvent(eventObj); 

        const display = getComputedStyle(taskPopUp.shadowRoot.getElementById('add-task-popup'));

        expect(display.display).toBe('block');

    });
});