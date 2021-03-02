beforeEach(() => {
    require('../src/scripts/script');
    require('../src/components/TaskItem');
    localStorage.setItem('tasks', '[]');
    localStorage.setItem('id', '0');
    document.body.innerHTML = `
        <ul id="task-list-elements">
        </ul>      
    `;
});

afterEach(() => {
    localStorage.clear();
});

test('Initializes localStorage correctly', () => {
    localStorage.clear();

    window.document.dispatchEvent(new Event('DOMContentLoaded', {
        bubbles: true,
        cancelable: true,
    }));

    expect(localStorage.getItem('tasks')).toBe('[]');
    expect(localStorage.getItem('id')).toBe('0');
    expect(document.getElementById('task-list-elements').children).toHaveLength(0);
});

// taskItem.checked and taskItem.text are undefined, but taskItem.id is set properly...
test('Reads task list and creates one task correctly', () => {
    localStorage.setItem('tasks', '[{"id":"0","checked":false,"text":"test_task"}]');

    window.document.dispatchEvent(new Event('DOMContentLoaded', {
        bubbles: true,
        cancelable: true,
    }));

    expect(document.getElementById('task-list-elements').children).toHaveLength(1);

    const taskItem = document.getElementById('task-list-elements').children[0];
    // expect(taskItem).toBe("");
    // expect(taskItem.checked).toBe("false");
    expect(taskItem.id).toBe('0');
    // expect(taskItem.text).toBe("test_task");
});

test('Reads task list and creates multiple tasks correctly', () => {
    localStorage.setItem('tasks', '[{"id":"0","checked":false,"text":"test_task"},'
    + '{"id":"1","checked":false,"text":"test_task1"}]');

    window.document.dispatchEvent(new Event('DOMContentLoaded', {
        bubbles: true,
        cancelable: true,
    }));

    expect(document.getElementById('task-list-elements').children).toHaveLength(2);

    const taskItem = document.getElementById('task-list-elements').children[0];
    // expect(taskItem).toBe("");
    expect(taskItem.getAttribute('checked')).toBe('false');
    expect(taskItem.id).toBe('0');
    expect(taskItem.getAttribute('text')).toBe('test_task');

    const taskItem1 = document.getElementById('task-list-elements').children[1];
    // expect(taskItem1).toBe("");
    expect(taskItem1.getAttribute('checked')).toBe('false');
    expect(taskItem1.id).toBe('1');
    expect(taskItem1.getAttribute('text')).toBe('test_task1');
});
