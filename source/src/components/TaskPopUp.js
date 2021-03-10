// const TaskItem = require('./TaskItem');
// create class for popup to add task
class TaskPopUp extends HTMLElement {
    // add TaskItem element to DOM
    addTask() {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        const input = this.shadowRoot.getElementById('task-input').value;
        if (input !== '') {
            // create TaskItem and append to DOM
            const task = {
                id: localStorage.getItem('id'),
                checked: false,
                text: input,
            };
            const taskItem = document.createElement('task-item');
            taskItem.setAttribute('id', task.id);
            taskItem.setAttribute('checked', task.checked);
            taskItem.setAttribute('text', task.text);
            document.getElementById('task-list-elements').appendChild(taskItem);
            // update localStorage
            tasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            const id = parseInt(localStorage.getItem('id'), 10) + 1;
            localStorage.setItem('id', `${id}`);
            const btnSound = new Audio('./icons/btnClick.mp3');
            btnSound.volume = 0.01*parseInt(localStorage.getItem('volume'), 10);
            btnSound.play();
            // hide popup
            this.closePopUp();
        }
    }

    // closes popup
    closePopUp() {
        const wrapper = this.shadowRoot.getElementById('add-task-popup');
        const input = this.shadowRoot.getElementById('task-input');
        wrapper.style.display = 'none';
        input.value = '';
    }

    /* create popup item to add tasks by building a custom component */
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        // use div as wrapper
        const wrapper = document.createElement('div');
        wrapper.setAttribute('id', 'add-task-popup');
        // close icon
        const close = wrapper.appendChild(document.createElement('img'));
        close.setAttribute('src', 'icons/close.svg');
        close.setAttribute('id', 'close-icon');
        const title = wrapper.appendChild(document.createElement('h3'));
        title.innerHTML = 'Add Task';
        // append an input form
        const input = wrapper.appendChild(document.createElement('input'));
        input.setAttribute('type', 'text');
        input.setAttribute('id', 'task-input');
        input.setAttribute('placeholder', 'What are you working on today?');
        input.setAttribute('maxlength', '48');
        input.setAttribute('spellcheck', 'false');
        // wrap add button in a footer
        const footer = wrapper.appendChild(document.createElement('div'));
        footer.setAttribute('class', 'button-footer');
        const addBtn = footer.appendChild(document.createElement('button'));
        addBtn.setAttribute('class', 'popup-btns');
        addBtn.setAttribute('id', 'add-task-btn');
        addBtn.innerHTML = 'Add';
        // event listeners for close icon and add button
        close.addEventListener('click', this.closePopUp.bind(this));
        addBtn.addEventListener('click', this.addTask.bind(this));
        // use ::part pseudo-element to style element outside of shadow tree -- for dark mode
        wrapper.setAttribute('part', 'popup-wrapper');
        close.setAttribute('part', 'close-icon');
        title.setAttribute('part', 'add-task-h3');
        input.setAttribute('part', 'task-input');
        footer.setAttribute('part', 'btn-footer');
        addBtn.setAttribute('part', 'add-btn');
        // prevent keyboard press & focus on input field
        window.addEventListener('keydown', (event) => {
            if (event.code === 'Enter' && wrapper.style.display !== 'none') {
                addBtn.click();
            }
            if (event.code === 'Escape' && wrapper.style.display !== 'none') {
                close.click();
            }
        });
        // CSS styling
        const style = document.createElement('style');
        style.textContent = `
        .button-footer {
            background-color: rgb(234 234 234);
            padding: 14px 20px;
            text-align: right;
            position: absolute;
            bottom: 0;
            right: 0;
            left: 0;
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
        }
        #close-icon {
            width: 15px;
            margin-top: 10px;
            margin-right: 10px;
            position:absolute;
            top:0;
            right:0;
            cursor: pointer;
            opacity: 0.33;
        }
        #close-icon:hover {
            opacity: 1;
            transform: scale(1.1);
        }
        #add-task-popup {
            display: none;
            position: fixed;
            width: 30%;
            height: 30%;
            border-radius: 4px;
            top:25%;
            left: 34%;
            z-index: 999;
            background-color: whitesmoke;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
            -webkit-animation-name: animatetop; 
            -webkit-animation-duration: 0.3s;
            animation-name: animatetop;
            animation-duration: 0.3s
        }
        @-webkit-keyframes animatetop {
            from {top:-200px; opacity:0} 
            to {top:70; opacity:1}
        }
        @keyframes animatetop {
            from {top:-200px; opacity:0}
            to {top:70; opacity:1}
        }
        #task-input {
            font-family: 'Quicksand', sans-serif;
            font-size: 1.5vw;
            font-weight: 600;
            width: 85%;
            height: 22%;
            background-color: whitesmoke;
            color: rgb(85, 85, 85);
            border-style: hidden;
            border-radius: 5px;
            outline: none;
            display: block;
            margin:20px auto 0 auto;
            font-weight: 500;
        }
        input[type='text']::placeholder {
            color: rgba(85, 85, 85, 0.336);
        }
        #add-task-popup > h3{
            font-size: 1.6vw;
            font-weight: 500;
            color: #f36060;
            border-bottom: solid 1px #d2d2d2;
            padding-bottom: 5px;
            width: 85%;
            margin: 20px auto 10px auto;
        }
        .popup-btns {
            cursor: pointer;
            border-style: none;
            border-radius: 4px;
            text-align: center;
            background-color:#f36060;
            color:#fff;
            font-family: 'Quicksand', sans-serif;
            height: 17%;
            width: 20%;
            font-size: 1em;
            font-weight: 500;
            outline: none;
        }
        .popup-btns:hover {
            filter: brightness(105%);
            transform: scale(1.1);
        }
        #add-task-btn {
            padding: 8px 12px;
        }
        #cancel-task-btn {
            position: absolute;
            float:right;
            right: 5em;
            bottom: 2em;
        }`;
        shadow.appendChild(wrapper);
        shadow.appendChild(style);
    }
}
customElements.define('task-popup', TaskPopUp);

window.addEventListener('load', () => {
    const popupBtn = document.getElementById('task-popup-btn');
    const popUp = document.createElement('task-popup');
    popUp.setAttribute('class', 'popup');
    document.body.appendChild(popUp);
    popupBtn.addEventListener('click', () => {
        const btnSound = new Audio('./icons/btnClick.mp3');
        btnSound.volume = 0.01*parseInt(localStorage.getItem('volume'), 10);
        btnSound.play();
        // make sure any popup is closed before opening current popup
        const popups = Array.from(document.getElementsByClassName('popup'));
        for (let i = 0; i < popups.length; i++) {
            popups[i].closePopUp();
        }
        popUp.shadowRoot.getElementById('add-task-popup').setAttribute('style', 'display:block');
        popUp.shadowRoot.getElementById('task-input').focus();
    });
});

module.exports = TaskPopUp;
