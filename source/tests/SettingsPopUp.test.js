import SettingsPopUp from '../src/components/SettingsPopUp';
window.HTMLMediaElement.prototype.play = () => { /* do nothing */ };
beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('pomo-length', '25');
    localStorage.setItem('short-break-length', '5');
    localStorage.setItem('long-break-length', '15');
    jest.resetModules();
    document.body.innerHTML = `
        <button class="top-buttons" id="setting-button">
            <img src="../icons/settings.svg" id="gear" class="top-button-img" alt="gear">
            <p class="top-button-text">Setting</p>
        </button>
    `;
});

test('Confirm Button functions as intended', () => {
    const testSettingsPopUp = new SettingsPopUp();
    const shadow = testSettingsPopUp.shadowRoot;

    const pomoLength = shadow.querySelectorAll('input')[0];
    const shortBreakLength = shadow.querySelectorAll('input')[1];
    const longBreakLength = shadow.querySelectorAll('input')[2];

    pomoLength.value = '30';
    shortBreakLength.value = '10';
    longBreakLength.value = '20';

    const confirmBtn = shadow.querySelectorAll('button')[0];

    confirmBtn.click();

    expect(localStorage.getItem('pomo-length')).toBe('30');
    expect(localStorage.getItem('short-break-length')).toBe('10');
    expect(localStorage.getItem('long-break-length')).toBe('20');

    // closes pop up
    expect(shadow.getElementById('settings-confirm-popup').style.display).toBe('none');
});

// edge case for settings not implemented yet, ignore for now.

// test('Confirm Button edge cases functions as intended', () => {

//     const testSettingsPopUp = new SettingsPopUp();
//     const shadow = testSettingsPopUp.shadowRoot;

//     const pomoLength = shadow.querySelectorAll('input')[0];
//     const shortBreakLength = shadow.querySelectorAll('input')[1];
//     const longBreakLength = shadow.querySelectorAll('input')[2];

//     pomoLength.value = '100';
//     shortBreakLength.value = '200';
//     longBreakLength.value = '300';

//     const confirmBtn = shadow.querySelectorAll('button')[0];

//     confirmBtn.click();

//     expect(localStorage.getItem('pomo-length')).toBe('60');
//     expect(localStorage.getItem('short-break-length')).toBe('60');
//     expect(localStorage.getItem('long-break-length')).toBe('600');

//     // closes pop up
//     expect(shadow.getElementById('settings-confirm-popup').style.display).toBe('none');

// });

test('Cancel Button functions as intended', () => {
    const testSettingsPopUp = new SettingsPopUp();
    const shadow = testSettingsPopUp.shadowRoot;

    const pomoLength = shadow.querySelectorAll('input')[0];
    const shortBreakLength = shadow.querySelectorAll('input')[1];
    const longBreakLength = shadow.querySelectorAll('input')[2];

    pomoLength.value = '30';
    shortBreakLength.value = '10';
    longBreakLength.value = '20';

    const cancelBtn = shadow.querySelectorAll('button')[1];

    cancelBtn.click();

    expect(localStorage.getItem('pomo-length')).toBe('25');
    expect(localStorage.getItem('short-break-length')).toBe('5');
    expect(localStorage.getItem('long-break-length')).toBe('15');

    expect(shadow.getElementById('settings-confirm-popup').style.display).toBe('none');
});

test('All attributes set correctly', () => {
    const testSettingsPopUp = new SettingsPopUp();
    const shadow = testSettingsPopUp.shadowRoot;

    // wrapper attributes set correctly
    expect(shadow.querySelector('div').getAttribute('id')).toBe('settings-confirm-popup');

    // title set correctly
    expect(shadow.querySelector('h3').innerHTML).toBe('Settings');

    // pomo input attributes set correctly
    expect(shadow.querySelectorAll('input')[0].getAttribute('type')).toBe('number');
    expect(shadow.querySelectorAll('input')[0].getAttribute('id')).toBe('pomo-length-input');
    expect(shadow.querySelectorAll('input')[0].getAttribute('value')).toBe('25');
    expect(shadow.querySelectorAll('input')[0].getAttribute('min')).toBe('1');
    expect(shadow.querySelectorAll('input')[0].getAttribute('max')).toBe('60');

    // short break input attributes set correctly
    expect(shadow.querySelectorAll('input')[1].getAttribute('type')).toBe('number');
    expect(shadow.querySelectorAll('input')[1].getAttribute('id')).toBe('short-break-input');
    expect(shadow.querySelectorAll('input')[1].getAttribute('value')).toBe('5');
    expect(shadow.querySelectorAll('input')[1].getAttribute('min')).toBe('1');
    expect(shadow.querySelectorAll('input')[1].getAttribute('max')).toBe('60');

    // long break input attributes set correctly
    expect(shadow.querySelectorAll('input')[2].getAttribute('type')).toBe('number');
    expect(shadow.querySelectorAll('input')[2].getAttribute('id')).toBe('long-break-input');
    expect(shadow.querySelectorAll('input')[2].getAttribute('value')).toBe('15');
    expect(shadow.querySelectorAll('input')[2].getAttribute('min')).toBe('1');
    expect(shadow.querySelectorAll('input')[2].getAttribute('max')).toBe('60');

    // confirm button attributes set correctly
    expect(shadow.querySelectorAll('button')[0].getAttribute('class')).toBe('settings-popup-btns');
    expect(shadow.querySelectorAll('button')[0].getAttribute('id')).toBe('confirm-settings-btn');
    expect(shadow.querySelectorAll('button')[0].innerHTML).toBe('Confirm');

    // cancel button attributes set correctly
    expect(shadow.querySelectorAll('button')[1].getAttribute('class')).toBe('settings-popup-btns');
    expect(shadow.querySelectorAll('button')[1].getAttribute('id')).toBe('cancel-settings-btn');
    expect(shadow.querySelectorAll('button')[1].innerHTML).toBe('Cancel');
});

test('Pop up button works correctly', () => {
    dispatchEvent(new Event('load'));

    const settingsButton = document.getElementById('setting-button');
    const settingsPopUp = document.createElement('settings-popup');
    document.body.appendChild(settingsPopUp);

    settingsButton.click();

    const shadow = settingsPopUp.shadowRoot;

    const display = getComputedStyle(shadow.getElementById('settings-confirm-popup'));

    expect(display.display).toBe('block');
});
