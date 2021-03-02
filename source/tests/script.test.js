beforeEach(() => {
    require('../src/scripts/script');
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

    window.document.dispatchEvent(new Event("DOMContentLoaded", {
        bubbles: true,
        cancelable: true
    }));

    expect(localStorage.getItem('tasks')).toBe('[]');
    expect(localStorage.getItem('id')).toBe('0');
    expect(document.getElementById("task-list-elements").children.length).toBe(0);
});

test('Reads task list and creates tasks correctly', () => {
    localStorage.setItem('tasks', "[{\"id\":\"0\",\"checked\":false,\"text\":\"test_task\"}]");

    window.document.dispatchEvent(new Event("DOMContentLoaded", {
        bubbles: true,
        cancelable: true
    }));

    expect(document.getElementById("task-list-elements").children.length).toBe(1);
    
    let taskItem = document.getElementById("task-list-elements").children[0];
    // expect(taskItem).toBe("");
    expect(taskItem.checked).toBe("false");
    expect(taskItem.id).toBe("0");
    expect(taskItem.text).toBe("test_task");
});

