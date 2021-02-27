// create class for popup to add task
class TaskPopUp extends HTMLElement {
    // add TaskItem element to DOM
    addTask() {
        var tasks = JSON.parse(localStorage.getItem('tasks'));
        var input = this.shadowRoot.getElementById('task-input').value;
        if (input != '') {
            // create TaskItem and append to DOM
            let task = {id: localStorage.getItem('id'),
                        checked: false,
                        text: input};
            document.getElementById("task-list-elements").appendChild(new TaskItem(task));
            // update localStorage
            tasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            let id = parseInt(localStorage.getItem('id')) + 1;
            localStorage.setItem('id', '' + id);
            // hide popup
            this.closePopUp();
        }
    }

    // closes popup
    closePopUp() {
        let wrapper = this.shadowRoot.getElementById('add-task-popup');
        let input = this.shadowRoot.getElementById('task-input');
        wrapper.style.display = 'none';
        input.value = '';
    }

    /* create popup item to add tasks by building a custom component */
    constructor() {
        super();
        let shadow = this.attachShadow({mode: 'open'});
        // use div as wrapper
        let wrapper = document.createElement('div');
        wrapper.setAttribute('id', 'add-task-popup');
        let title = wrapper.appendChild(document.createElement('h3'));
        title.innerHTML = 'Add Task';
        // append an input form
        let input = wrapper.appendChild(document.createElement('input'));
        input.setAttribute('type', 'text');
        input.setAttribute('id', 'task-input');
        input.setAttribute('placeholder', 'What are you working on today?');
        input.setAttribute('maxlength', '42');
        // append add and cancel buttons
        let addBtn = wrapper.appendChild(document.createElement('button'));
        addBtn.setAttribute('class', 'popup-btns');
        addBtn.setAttribute('id', 'add-task-btn');
        addBtn.innerHTML = 'Add';
        let cancelBtn = wrapper.appendChild(document.createElement('button'));
        cancelBtn.setAttribute('class', 'popup-btns');
        cancelBtn.setAttribute('id', 'cancel-task-btn');
        cancelBtn.innerHTML = 'Cancel';
        // add event listeners to both buttons
        addBtn.addEventListener('click', this.addTask.bind(this));
        cancelBtn.addEventListener('click', this.closePopUp.bind(this));
        // CSS styling
        let style = document.createElement('style');
        style.textContent = `
        #add-task-popup {
            display: none;
            position: fixed;
            width: 30%;
            height: 30%;
            border-radius: 4px;
            top:25%;
            left: 34%;
            border: 3px solid #f1f1f1;
            z-index: 1;
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
            margin:20px auto 10px auto;
        }
        ::placeholder {
            color: rgba(85, 85, 85, 0.336);
        }
        #add-task-popup > h3{
            font-size: 1.6vw;
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
            position: absolute;
            float:left;
            left: 5em;
            bottom: 2em;
        }
        #cancel-task-btn {
            position: absolute;
            float:right;
            right: 5em;
            bottom: 2em;
        }`
        shadow.appendChild(wrapper);
        shadow.appendChild(style);
    }
}

customElements.define('task-popup', TaskPopUp);