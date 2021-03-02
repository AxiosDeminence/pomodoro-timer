const TaskItem = require('../src/components/TaskItem');

beforeEach(() => {
    require('../src/scripts/script');
    localStorage.setItem('tasks', '[]');
    localStorage.setItem('id', '0');
});

afterEach(() => {
    localStorage.clear();
});

test('Initializes localStorage correctly', () => {
    document.body.innerHTML = `
        <ul id="task-list-elements">
        </ul>      
    `;

    localStorage.clear();

    window.document.dispatchEvent(new Event("DOMContentLoaded", {
        bubbles: true,
        cancelable: true
    }));

    expect(localStorage.getItem('tasks')).toBe('[]');
    expect(localStorage.getItem('id')).toBe('0');
    expect(document.getElementById("task-list-elements").children.length).toBe(0);
});

test('Reads task list and creates tasks correctly', () => {
    document.body.innerHTML = `
        <ul id="task-list-elements">
        </ul>      
    `;

    localStorage.setItem('tasks', "[{\"id\":\"0\",\"checked\":false,\"text\":\"test_task\"}]");

    window.document.dispatchEvent(new Event("DOMContentLoaded", {
        bubbles: true,
        cancelable: true
    }));

    expect(document.getElementById("task-list-elements").children.length).toBe(1);
    
    // let tasks = JSON.parse(localStorage.getItem('tasks'));
    // let taskItem = new TaskItem(tasks[0]);
    // expect(document.getElementById("task-list-elements").children[0]).toBe(taskItem);
});

// test('Pop up button works correctly', () => {
//     document.body.innerHTML = `
//         <button id="task-popup-btn"> <img src="../icons/plus.svg" id="plus"></button>
//     `;

//     const popupBtn = document.getElementById('task-popup-btn');
//     const popUp = document.createElement('task-popup');
//     document.body.appendChild(popUp);

//     popupBtn.click();

//     expect(popUp.shadowRoot.querySelector('add-task-popup').getAttribute('style')).toBe('display:block');


// });