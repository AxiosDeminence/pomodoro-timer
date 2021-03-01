import TaskPopUp from '../src/components/TaskPopUp';
import TaskItem from '../src/components/TaskItem';

jest.mock('../src/components/TaskItem');

beforeEach(() => {
    localStorage.setItem('tasks', '[]');
    localStorage.setItem('id', '0');
});

afterEach(() => {
    localStorage.clear();
});

test('', () => {
    document.body.innerHTML = `
        <ul id="task-list-elements">
        </ul>
    `;

    const testTaskPopUp = new TaskPopUp();
    const shadow = testTaskPopUp.shadowRoot;

    const input = shadow.querySelector('input');
    input.value = 'test task';

    const addButton = shadow.querySelector('button');
    addButton.click();

    expect(localStorage.getItem('tasks')).toContain('test task');
});
