// create class for popup to add task
class TaskPopUp extends HTMLElement {
    /* create popup item to add tasks by building a custom component */
    constructor() {
        super();
        // create shadow root
        let shadow = this.attachShadow({mode: 'open'});
        let wrapper = document.createElement('div');
        wrapper.setAttribute('id', 'add-task-popup');
        let title = wrapper.appendChild(document.createElement('h3'));
        title.innerHTML = 'Add Task';
        let input = wrapper.appendChild(document.createElement('input'));
        input.setAttribute('type', 'text');
        input.setAttribute('id', 'task-input');
        input.setAttribute('placeholder', 'What are you working on today?');
        input.setAttribute('maxlength', '42');
        let addBtn = wrapper.appendChild(document.createElement('button'));
        addBtn.setAttribute('class', 'popup-btns');
        addBtn.setAttribute('id', 'add-task-btn');
        addBtn.innerHTML = 'Add';
        addBtn.addEventListener('click', function() {
            if (input.value != '') {
                // create task
                var task = new TaskItem(input.value);
                document.getElementById("task-list-elements").appendChild(task);
                // update local storage
                var tasks = JSON.parse(localStorage.getItem('tasks'));
                tasks.push(input.value);
                localStorage.setItem('tasks', JSON.stringify(tasks));
                // hide popup
                wrapper.style.display = 'none';
                input.value = '';
            }
        });
        let cancelBtn = wrapper.appendChild(document.createElement('button'));
        cancelBtn.setAttribute('class', 'popup-btns');
        cancelBtn.setAttribute('id', 'cancel-task-btn');
        cancelBtn.innerHTML = 'Cancel';
        cancelBtn.addEventListener('click', function() {
            wrapper.style.display = 'none';
            input.value = '';
        });

        let style = document.createElement('style');
        style.textContent = `
        #add-task-popup {
            display: none;
            position: fixed;
            width: 30%;
            height: 26%;
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
            height: 20px;
            font-family: 'Quicksand', sans-serif;
            font-size: larger;
            font-weight: 600;
            width: 90%;
            height: 22%;
            background-color: whitesmoke;
            color: rgb(85, 85, 85);
            border-style: hidden;
            border-radius: 5px;
            outline: none;
            display: block;
            margin:0 auto;
        }
        ::placeholder {
            color: rgba(85, 85, 85, 0.336);
        }
        #add-task-popup > h3{
            text-align: center;
            color: #f36060;
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
            left: 6em;
            bottom: 2em;
        }
        #cancel-task-btn {
            position: absolute;
            float:right;
            right: 6em;
            bottom: 2em;
        }`
        shadow.appendChild(wrapper);
        shadow.appendChild(style);
    }
}
// register custom element
customElements.define('task-popup', TaskPopUp);