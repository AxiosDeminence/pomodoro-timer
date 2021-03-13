// creates a task list item
class TaskItem extends HTMLElement {
    // toggles custom attribute 'checked' for this element
    toggle() {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        // update checked attribute
        const checked = this.getAttribute('checked').toLowerCase() === 'true';
        this.setAttribute('checked', !checked);
        // update task item in localStorage
        const task = tasks.find((t) => t.id === this.getAttribute('id') && t.text === this.getAttribute('text'));
        if (typeof task !== 'undefined') {
            task.checked = !task.checked;
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    // removes custom element from DOM and deletes task from localStorage
    removeTask() {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        // find and remove task from localStorage
        tasks.splice(tasks.findIndex((task) => task.id === this.getAttribute('id') && task.text === this.getAttribute('text')), 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        // remove this element from DOM
        this.parentNode.removeChild(this);
        // update focus task title if focus task no longer exists
        const focusDiv = document.getElementById('focus-task');
        if (focusDiv.querySelector('task-item') === null) {
            const title = document.getElementById('select-focus');
            title.innerHTML = '';
        }
    }

    // allows user to focus on a task item
    focus(event) {
        // stop default 'checked' action
        event.stopPropagation(); 
        // remove task item from parent 
        this.parentNode.removeChild(this);
        // update focused attribute
        this.setAttribute('focused', true);
        // update local storage
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        const task = tasks.find((t) => t.id === this.getAttribute('id') && t.text === this.getAttribute('text'));
        if (typeof task !== 'undefined') {
            task.focused = true;
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        // add to div below clock
        const focusDiv = document.getElementById('focus-task');
        const focusTask = focusDiv.querySelector('task-item');
        const ul = document.getElementById('task-list-elements');
        const title = document.getElementById('select-focus');
        // if there doesn't exist a focus task yet
        if (focusTask === null) {
            focusDiv.appendChild(this);
        }
        // else, remove existing focus task and add 'this' one
        else {
            focusDiv.removeChild(focusTask);
            ul.appendChild(focusTask);
            focusTask.setAttribute('focused', false);
            const unfocus = tasks.find((t) => t.id === focusTask.getAttribute('id') && t.text === focusTask.getAttribute('text'));
            if (typeof unfocus !== 'undefined') {
                unfocus.focused = false;
                localStorage.setItem('tasks', JSON.stringify(tasks));
            }
            // add 'this' task item to under clock display
            focusDiv.appendChild(this);
        }
        // update title
        title.innerHTML = 'Focusing on:';
    }

    /* create task list item by building custom component */
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        // set attributes
        // this.setAttribute('id', task.id);
        // this.setAttribute('checked', task.checked);
        // this.setAttribute('text', task.text);
        // create list node
        const li = document.createElement('li');
        li.setAttribute('id', 'li');
        const check = document.createElement('img');
        check.setAttribute('src', 'icons/check.svg');
        check.setAttribute('class', 'check-icon');
        check.setAttribute('part', 'test');
        li.appendChild(check);
        // add event listener such that clicking on element crosses out task
        this.addEventListener('click', this.toggle);
        const focus = document.createElement('img');
        focus.setAttribute('src', 'icons/focus.svg');
        focus.setAttribute('class', 'focus-icon');
        li.appendChild(focus);
        // add event listener to image to focus a task
        focus.addEventListener('click', this.focus.bind(this));
        // create delete icon
        const trash = document.createElement('img');
        trash.setAttribute('src', 'icons/delete.svg');
        trash.setAttribute('class', 'delete-icon');
        li.appendChild(trash);
        // add event listener to image to remove task
        trash.addEventListener('click', this.removeTask.bind(this));
        // CSS styling
        const style = document.createElement('style');
        style.textContent = `
        :host {
            cursor: pointer;
            height: 50px;
            position: relative;
            margin-bottom: 10px;
            border-radius: 5px;
            margin-right: 20%;
            box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
            display: flex;
            align-items: center;
            padding-left: 37px;
            background-color: #f36060;
            color: white;
            font-size: medium;
            font-weight: 500;
            border-style:none;
            user-select: none;
        }
        :host(:hover) {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
        }
        :host([checked = 'true']) {
            background: #f3606060;
            text-decoration: line-through;
        }
        :host([checked = 'true']) .check-icon {
            visibility: visible;
        }
        .check-icon {
            position: absolute;
            left: 10px;
            vertical-align: middle;
            width: 20px;
            height: 20px;
            margin: 0;
            visibility: hidden;
        }
        :host(:hover) .delete-icon {
            visibility: visible;
        }
        .delete-icon {
            position: absolute;
            color: #fff;
            right: 10px;
            vertical-align: middle;
            width: 20px;
            height: 20px;
            margin: 0;
            visibility: hidden;
        }
        .delete-icon:hover {
            transform: scale(1.3);
            filter:brightness(105%)
        }
        :host(:hover) .focus-icon {
            visibility: visible;
        }
        .focus-icon {
            position: absolute;
            color: #fff;
            right: 40px;
            vertical-align: middle;
            width: 20px;
            height: 20px;
            margin: 0;
            visibility: hidden;
        }
        .focus-icon:hover {
            transform: scale(1.3);
            filter:brightness(105%)
        }
        `;
        shadow.appendChild(li);
        shadow.appendChild(style);
    }

    static get observedAttributes() {
        return ['text'];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        const shadow = this.shadowRoot;
        const text = document.createTextNode(newVal);
        shadow.getElementById('li').append(text);
    }
}

customElements.define('task-item', TaskItem);

module.exports = TaskItem;
