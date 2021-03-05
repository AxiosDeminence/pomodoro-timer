import ResetPopUp from '../../src/components/ResetPopUp';
import TaskItem from '../../src/components/TaskItem';

beforeEach(() => {
    const tasks = [];
    const id = 2;
    const taskF = { id: 0, checked: false, text: 'First Item' };
    const taskT = { id: 1, checked: true, text: 'Second Item' };
    tasks.push(taskF);
    tasks.push(taskT);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('id', `${id}`);
    document.body.innerHTML = `
    <button class="top-buttons" id="reset-button">
        <img src="../icons/reset.svg" id="reset" class="top-button-img" alt="reset">
        <p class="top-button-text">Reset</p>
    </button>
    <ul id="task-list-elements">
    </ul>
    `;
    const list = document.getElementById('task-list-elements');
    const taskItemF = new TaskItem();
    taskItemF.setAttribute('id', taskF.id);
    taskItemF.setAttribute('checked', taskF.checked);
    taskItemF.setAttribute('text', taskF.text);
    const taskItemT = new TaskItem();
    taskItemT.setAttribute('id', taskT.id);
    taskItemT.setAttribute('checked', taskT.checked);
    taskItemT.setAttribute('text', taskT.text);
    list.appendChild(taskItemF);
    list.appendChild(taskItemT);
});

afterEach(() => [
    localStorage.clear(),
]);

test(('reset button pops the window'), () => {
    const resetPopUp = document.createElement('reset-popup');
    document.body.appendChild(resetPopUp);
    const resetBtn = document.getElementById('reset-button');
    window.document.dispatchEvent(new Event('DOMContentLoaded', {
        bubbles: true,
        cancelable: true,
    }));
    resetBtn.click();
    const dispaly = getComputedStyle(resetPopUp.shadowRoot.getElementById('reset-confirm-popup'));
    expect(dispaly.display).toBe('block');
});

test(('close without reset'), () => {
    const popUP = new ResetPopUp();
    popUP.shadowRoot.getElementById('reset-confirm-popup').setAttribute('style', 'display:block');
    const close = popUP.shadowRoot.querySelector('img');
    close.click();
    const dispaly = getComputedStyle(popUP.shadowRoot.getElementById('reset-confirm-popup'));
    expect(dispaly.display).toBe('none');
    expect(localStorage.getItem('id')).toBe('2');
    expect(localStorage.getItem('tasks')).toBe('[{"id":0,"checked":false,"text":"First Item"},{"id":1,"checked":true,"text":"Second Item"}]');
});

test(('confirm and reset'), () => {
    const popUP = new ResetPopUp();
    popUP.shadowRoot.getElementById('reset-confirm-popup').setAttribute('style', 'display:block');
    const confirm = popUP.shadowRoot.getElementById('confirm-reset-btn');
    confirm.click();
    const dispaly = getComputedStyle(popUP.shadowRoot.getElementById('reset-confirm-popup'));
    expect(dispaly.display).toBe('none');
    expect(localStorage.getItem('id')).toBe('0');
    expect(localStorage.getItem('tasks')).toBe('[]');
});
