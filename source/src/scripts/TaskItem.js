// creates a task list item
class TaskItem extends HTMLElement {
    // toggles the class value of list
    toggle() {
        this.li.classList.toggle('checked');
    }
    // removes custom element from DOM and deletes task from localStorage
    removeTask() {
        var tasks = JSON.parse(localStorage.getItem('tasks')); 
        let nodeList = this.li.childNodes;
        for (let i = 0; i < nodeList.length; i++) {
            if (nodeList[i].nodeType === Node.TEXT_NODE) {
                tasks.splice(tasks.indexOf(nodeList[i].textContent), 1);
                localStorage.setItem('tasks', JSON.stringify(tasks));
            }
        }
        this.parentNode.removeChild(this);
    }
    /* create task list item by building a custom component */
    constructor(task) {
        super();
        // create shadow root
        let shadow = this.attachShadow({mode: 'open'});
        // create list node
        this.li = document.createElement('li');
        let text = document.createTextNode(task);
        this.li.append(text);
        // add event listener such that clicking on element crosses out task
        this.addEventListener('click', this.toggle);
        // create the delete icon
        let newImg = document.createElement('img');
        newImg.setAttribute('src', '../icons/delete.svg');
        newImg.setAttribute('class', 'delete-icon');
        this.li.appendChild(newImg);
        // add event listener to image to remove task
        newImg.addEventListener('click', this.removeTask.bind(this));
        // apply CSS styling
        let style = document.createElement('style');
        style.textContent = `
        li {
            cursor: pointer;
            height: 50px;
            position: relative;
            margin-bottom: 10px;
            border-radius: 5px;
            margin-right: 20%;
            box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
            transition: 0.3s;
            display: flex;
            align-items: center;
            padding-left: 10px  ;
            background-color: #f36060;
            color: white;
            font-size: larger;
            font-weight: 500;
            border-style:none;
        }
        li:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }
        li:hover .delete-icon{
            visibility: visible;
        }
        li.checked {
            background: #f3606060;
            color: rgba(255, 255, 255, 0.651);
            text-decoration: line-through;
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
        }`
        // attach the created elements to the shadow DOM
        shadow.appendChild(this.li);
        shadow.appendChild(style);
    }
}
// register custom element
customElements.define('task-item', TaskItem);

