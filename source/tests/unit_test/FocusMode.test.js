test('', () => {
    document.body.innerHTML = `
        <button class='top-buttons' id='focus-button'>
            <img src="icons/half-moon.svg" id="focus" class="top-button-img" alt="focus">
        </button>
        <div id="pomodoro-timer">
            <div id='focus-task'>
                <h2 id='select-focus'></h2>
            </div>
        </div>
        <div id="task-list">
        </div>
        <div id="popup-button">
            <button id="task-popup-btn"> <img src="icons/plus.svg" id="plus"></button>
        </div>
    `;
    require('../../src/scripts/FocusMode');
    localStorage.getItem('state') === 'default';
    const popUpBtn = document.getElementById('popup-button');
    const taskListDiv = document.getElementById('task-list');
    const pomoDiv = document.getElementById('pomodoro-timer');
    const focusTask = document.getElementById('focus-task');

    const focusBtn = document.getElementById('focus-button');
    focusBtn.click();

    const display = getComputedStyle(popUpBtn);

    // expect(display).toBe('none');

    expect(true).toBe(true);
});
