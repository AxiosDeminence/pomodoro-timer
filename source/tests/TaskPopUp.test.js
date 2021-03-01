import TaskPopUp from '../src/components/TaskPopUp';

// jest.mock('../src/components/TaskItem');

beforeEach(() => {
    localStorage.setItem('tasks', '[]');
    localStorage.setItem('id', '0');
});

afterEach(() => {
    localStorage.clear();
});

test('Adding a task called test_task with the addButton correctly updates localStorage', () => {
    document.body.innerHTML = `
        <ul id="task-list-elements">
        </ul>
    `;

    const testTaskPopUp = new TaskPopUp();
    const shadow = testTaskPopUp.shadowRoot;

    const input = shadow.querySelector('input');
    input.value = 'test_task';

    const button = shadow.querySelectorAll('button');
    button[0].click();

    // new task test_task is added to list of tasks
    expect(localStorage.getItem('tasks')).toBe('[{\"id\":\"0\",\"checked\":false,\"text\":\"test_task\"}]');
    // id is updated
    expect(localStorage.getItem('id')).toBe('1');
    // input is set back to empty string
    expect(input.value).toBe("");
});

test('Adding empty task does not change localStorage', () => {

    document.body.innerHTML = `
        <ul id="task-list-elements">
        </ul>
    `;

    const testTaskPopUp = new TaskPopUp();
    const shadow = testTaskPopUp.shadowRoot;

    const input = shadow.querySelector('input');
    input.value = '';

    const button = shadow.querySelectorAll('button');
    button[0].click();

    // localStorage remains the same
    expect(localStorage.getItem('tasks')).toBe('[]');
    // id remains the same
    expect(localStorage.getItem('id')).toBe('0');
});

test('cancelButton works correctly', () => {

    document.body.innerHTML = `
        <ul id="task-list-elements">
        </ul>
    `;

    const testTaskPopUp = new TaskPopUp();
    const shadow = testTaskPopUp.shadowRoot;

    const button = shadow.querySelectorAll('button');
    button[1].click();

    expect(shadow.querySelector('div').style.display).toBe('none');
    expect(shadow.querySelector('input').value).toBe('');
});

test('All attributes set correctly', () => {
    const testTaskPopUp = new TaskPopUp();
    const shadow = testTaskPopUp.shadowRoot;

    // wrapper attributes set correctly
    expect(shadow.querySelector('div').getAttribute('id')).toBe('add-task-popup');

    // title set correctly
    expect(shadow.querySelector('h3').innerHTML).toBe('Add Task');

    // input attributes set correctly
    expect(shadow.querySelector('input').getAttribute('type')).toBe('text');
    expect(shadow.querySelector('input').getAttribute('id')).toBe('task-input');
    expect(shadow.querySelector('input').getAttribute('placeholder')).toBe('What are you working on today?');
    expect(shadow.querySelector('input').getAttribute('maxlength')).toBe('42');

    // add button attributes set correctly
    expect(shadow.querySelectorAll('button')[0].getAttribute('class')).toBe('popup-btns');
    expect(shadow.querySelectorAll('button')[0].getAttribute('id')).toBe('add-task-btn');
    expect(shadow.querySelectorAll('button')[0].innerHTML).toBe('Add');

    // cancel button attributes set correctly
    expect(shadow.querySelectorAll('button')[1].getAttribute('class')).toBe('popup-btns');
    expect(shadow.querySelectorAll('button')[1].getAttribute('id')).toBe('cancel-task-btn');
    expect(shadow.querySelectorAll('button')[1].innerHTML).toBe('Cancel');

});
