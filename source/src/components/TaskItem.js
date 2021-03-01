// creates a task list item
class TaskItem extends HTMLElement {
    // toggles custom attribute 'checked' for this element
    toggle() {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        // update checked attribute
        const checked = this.getAttribute('checked').toLowerCase() == 'true';
        this.setAttribute('checked', !checked);
        // update task item in localStorage
        const task = tasks.find((task) => task.id == this.getAttribute('id') && task.text == this.getAttribute('text'));
        if (typeof task !== 'undefined') {
            task.checked = !task.checked;
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    // removes custom element from DOM and deletes task from localStorage
    removeTask() {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        // find and remove task from localStorage
        tasks.splice(tasks.findIndex((task) => task.id == this.getAttribute('id') && task.text == this.getAttribute('text')), 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        // remove this element from DOM
        this.parentNode.removeChild(this);
    }

    /* create task list item by building custom component */
    constructor(task) {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        // set attributes
        this.setAttribute('id', task.id);
        this.setAttribute('checked', task.checked);
        this.setAttribute('text', task.text);
        // create list node
        const li = document.createElement('li');
        const text = document.createTextNode(task.text);
        li.append(text);
        // add event listener such that clicking on element crosses out task
        this.addEventListener('click', this.toggle);
        // create delete icon
        const icon = document.createElement('img');
        icon.setAttribute('src', '../icons/delete.svg');
        icon.setAttribute('class', 'delete-icon');
        li.appendChild(icon);
        // add event listener to image to remove task
        icon.addEventListener('click', this.removeTask.bind(this));
        // CSS styling
        const style = document.createElement('style');
        style.textContent = `
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
            padding: 0;
            visibility: hidden;
        }
        .delete-icon:hover {
            transform: scale(1.3);
            filter:brightness(105%)
        }`;
        shadow.appendChild(li);
        shadow.appendChild(style);
    }
}

customElements.define('task-item', TaskItem);

module.exports = TaskItem;
