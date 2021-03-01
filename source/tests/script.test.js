beforeEach(() => {
    require('../src/scripts/script');
    localStorage.setItem('tasks', '[]');
    localStorage.setItem('id', '0');
});

afterEach(() => {
    localStorage.clear();
});

test('empty test', () => {
    document.body.innerHTML = `
        <button id="task-popup-btn"> <img src="../icons/plus.svg" id="plus"></button>
    `;

    var popupBtn = document.getElementById('task-popup-btn');
    var popUp = document.createElement('task-popup');
    document.body.appendChild(popUp);

});

test('Pop up button works correctly', () => {
    document.body.innerHTML = `
        <button id="task-popup-btn"> <img src="../icons/plus.svg" id="plus"></button>
    `;

    const popupBtn = document.getElementById('task-popup-btn');
    const popUp = document.createElement('task-popup');
    document.body.appendChild(popUp);

    popupBtn.click();

    expect(popUp.shadowRoot.querySelector('add-task-popup').getAttribute('style')).toBe('display:block');


});