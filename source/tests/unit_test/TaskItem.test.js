import TaskItem from '../../src/components/TaskItem';

window.HTMLMediaElement.prototype.play = () => { /* do nothing */ };
beforeEach(() => {
    const tasks = [];
    const id = 2;
    const taskF = { id: '0', checked: false, text: 'First Item' };
    const taskT = { id: '1', checked: true, text: 'Second Item' };
    tasks.push(taskF);
    tasks.push(taskT);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('id', `${id}`);
});

afterEach(() => [
    localStorage.clear(),
]);
test(('toggle checked from false to true'), () => {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let taskItem = new TaskItem();
    taskItem.setAttribute('id', tasks[0].id);
    taskItem.setAttribute('checked', tasks[0].checked);
    taskItem.setAttribute('text', tasks[0].text);
    taskItem.click();
    expect(taskItem.getAttribute('checked')).toBe('true');
    // localstorage is updated
    tasks = JSON.parse(localStorage.getItem('tasks'));
    taskItem = new TaskItem();
    taskItem.setAttribute('id', tasks[0].id);
    taskItem.setAttribute('checked', tasks[0].checked);
    taskItem.setAttribute('text', tasks[0].text);
    expect(taskItem.getAttribute('checked')).toBe('true');
});

test(('toggle checked from true to false'), () => {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let taskItem = new TaskItem();
    taskItem.setAttribute('id', tasks[1].id);
    taskItem.setAttribute('checked', tasks[1].checked);
    taskItem.setAttribute('text', tasks[1].text);
    taskItem.click();
    expect(taskItem.getAttribute('checked')).toBe('false');
    // localstorage is updated
    tasks = JSON.parse(localStorage.getItem('tasks'));
    taskItem = new TaskItem();
    taskItem.setAttribute('id', tasks[0].id);
    taskItem.setAttribute('checked', tasks[0].checked);
    taskItem.setAttribute('text', tasks[0].text);
    expect(taskItem.getAttribute('checked')).toBe('false');
});

test(('remove a task'), () => {
    document.body.innerHTML = `
        <button class="top-buttons" id="reset-button">
            <img src="../icons/reset.svg" id="reset" class="top-button-img" alt=git "reset">
            <p class="top-button-text">Reset</p>
        </button>
        <ul id="task-list-elements">
        </ul>
        <div id='focus-task'>
            <h2 id='select-focus'></h2>
        </div>
    `;
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    const taskItem = new TaskItem();
    taskItem.setAttribute('id', tasks[0].id);
    taskItem.setAttribute('checked', tasks[0].checked);
    taskItem.setAttribute('text', tasks[0].text);
    const list = document.getElementById('task-list-elements');
    list.appendChild(taskItem);
    expect(list.childElementCount).toBe(1);
    const icon = taskItem.shadowRoot.querySelector("img[src='icons/delete.svg']");
    icon.click();
    tasks = JSON.parse(localStorage.getItem('tasks'));
    expect(tasks).toEqual([{ checked: true, id: '1', text: 'Second Item' }]);
    expect(list.childElementCount).toBe(0);
});

describe(('focus task'), () => {
    beforeEach(() => {
        const tasks = [];
        const id = 2;
        const task1 = {
            id: '0', checked: false, text: 'First Item', focused: false,
        };
        const task2 = {
            id: '1', checked: false, text: 'Second Item', focused: false,
        };
        const task3 = {
            id: '2', checked: false, text: 'Third Item', focused: false,
        };
        tasks.push(task1);
        tasks.push(task2);
        tasks.push(task3);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        localStorage.setItem('id', `${id}`);
        document.body.innerHTML = `
            <div id='focus-task'>
                <h2 id='select-focus'></h2>
            </div>
            <ul id="task-list-elements">
                <task-item id="0" checked="false" text="First Item" focused="false"></task-item>
                <task-item id="1" checked="false" text="Second Item" focused="false"></task-item>
                <task-item id="2" checked="false" text="Third Item" focused="false"></task-item>
            </ul>
        `;
    });

    test(('set a new focus task'), () => {
        const task1 = document.getElementById('0');
        task1.shadowRoot.querySelector('img[src="icons/focus.svg"]').click();
        expect(task1.getAttribute('focused')).toBe('true');
        // local storage is correctly updated
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        expect(tasks[0].focused).toBe(true);
        // task item is moved to focuse section
        const taskList = document.getElementById('task-list-elements');
        const focuse = document.getElementById('focus-task');
        expect(taskList.childElementCount).toBe(2);
        expect(task1.parentElement).toBe(focuse);
    });

    test(('change focus task'), () => {
        const task1 = document.getElementById('0');
        task1.shadowRoot.querySelector('img[src="icons/focus.svg"]').click();
        const task2 = document.getElementById('1');
        task2.shadowRoot.querySelector('img[src="icons/focus.svg"]').click();
        expect(task1.getAttribute('focused')).toBe('false');
        expect(task2.getAttribute('focused')).toBe('true');
        // local storage
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        expect(tasks[0].focused).toBe(false);
        expect(tasks[1].focused).toBe(true);
        // task2 is moved to focus section and task 1 is in task list
        const taskList = document.getElementById('task-list-elements');
        const focuse = document.getElementById('focus-task');
        expect(task1.parentElement).toBe(taskList);
        expect(task2.parentElement).toBe(focuse);
    });

    test(('remove a focus task'), () => {
        const task1 = document.getElementById('0');
        task1.shadowRoot.querySelector('img[src="icons/focus.svg"]').click();
        // remove task1
        task1.shadowRoot.querySelector('img[src="icons/delete.svg"]').click();
        const focuse = document.getElementById('focus-task');
        expect(focuse.querySelector('task-item')).toBe(null);
        const tilte = document.getElementById('select-focus');
        expect(tilte.innerHTML).toBe('');
    });
});
