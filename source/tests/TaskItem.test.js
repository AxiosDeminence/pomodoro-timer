import TaskItem from '../src/components/TaskItem.js';

beforeEach(() => {
    const tasks = [];
    const id = 2;
    const taskF = { id: 0, checked: false, text: 'First Item' };
    const taskT = { id: 1, checked: true, text: 'Second Item' };
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
    <ul id="task-list-elements">
    </ul> 
    `;
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    const taskItem = new TaskItem();
    taskItem.setAttribute('id', tasks[0].id);
    taskItem.setAttribute('checked', tasks[0].checked);
    taskItem.setAttribute('text', tasks[0].text);
    const list = document.getElementById('task-list-elements');
    list.appendChild(taskItem);
    expect(list.childElementCount).toBe(1);
    const icon = taskItem.shadowRoot.querySelector('img');
    icon.click();
    tasks = JSON.parse(localStorage.getItem('tasks'));
    expect(tasks).toEqual([{ checked: true, id: 1, text: 'Second Item' }]);
    expect(list.childElementCount).toBe(0);
});
