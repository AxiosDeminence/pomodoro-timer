import TaskPopUp from '../src/components/TaskPopUp';
import TaskItem from '../src/components/TaskItem';
jest.mock('../src/components/TaskItem');


beforeEach(() => {
    localStorage.setItem("tasks", "");

});

afterEach(() => {
    localStorage.clear();
})

test('', () => {

    document.body.innerHTML = `
        <ul id="task-list-elements">
        </ul>
    `;

    let testTaskPopUp = new TaskPopUp();
    let shadow = testTaskPopUp.shadowRoot;

    
    let input = shadow.querySelector("input");
    input.value = "test task";


    let addButton = shadow.querySelector("button");
    addButton.click();

    //expect(localStorage.getItem("tasks")).toContain("test task");

});