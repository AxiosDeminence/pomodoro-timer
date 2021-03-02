const TaskItem = require('../src/components/TaskItem');

beforeEach(() => {
    require('../src/scripts/script');
    require('../src/components/TaskItem');
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
    
    let taskItem = document.getElementById("task-list-elements").children[0];
    let task = JSON.stringify(taskItem);

    // let tasks = JSON.parse(localStorage.getItem('tasks'));
    // let taskItem = new TaskItem(tasks[0]);
    expect(task).toBe("tasks[0]");
});

