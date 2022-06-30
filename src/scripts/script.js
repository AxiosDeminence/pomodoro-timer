import Toolbox from './Toolbox.mjs';

(function initializeLocalStorage() {
    const defaults = {
        tasks: '[]',
        id: 0,
        theme: 'light',
        volume: 50,
        state: 'default',
        'tab-label': 'on',
        clickState: 'on',
        alarmState: 'on',
        'pomo-length': 25,
        'short-break-length': 5,
        'long-break-length': 15,
    };

    Object.entries(defaults).forEach(([key, value]) => {
        if (localStorage.getItem(key) === null) {
            localStorage.setItem(key, value.toString());
        }
    });
}());

const toolbox = new Toolbox();

if (typeof Worker !== 'undefined') {
    toolbox.registerComponent()
} else {
    toolbox.registerComponent()
}

function getTasks() {
    return JSON.parse(localStorage.getItem('tasks'));
}

/**
 * Show incomplete tasks and hides completed tasks
 */
function showInComplete() {
    // Reference task list, upnext, and completed buttons in the DOM
    const tasks = document.getElementById('task-list-elements').children;
    const upNextBtn = document.getElementById('up-next');
    const completedBtn = document.getElementById('completed');

    // set button attributes for style
    upNextBtn.setAttribute('data-selected', 'true');
    completedBtn.setAttribute('data-selected', 'false');

    // loop through elements and hide/show them depending on checked status
    for (let i = 0; i < tasks.length; i += 1) {
        if (tasks[i].getAttribute('checked') === 'false') {
            tasks[i].style.display = 'flex';
        } else {
            tasks[i].style.display = 'none';
        }
    }
}

/**
 * Show completed tasks and hides incomplete tasks
 */
function showCompleted() {
    // Reference task list, upnext, and completed buttons in the DOM
    const tasks = document.getElementById('task-list-elements').children;
    const upNextBtn = document.getElementById('up-next');
    const completedBtn = document.getElementById('completed');

    // set button attributes for style
    upNextBtn.setAttribute('data-selected', 'false');
    completedBtn.setAttribute('data-selected', 'true');

    // loop through elements and hide/show them depending on checked status
    for (let i = 0; i < tasks.length; i += 1) {
        if (tasks[i].getAttribute('checked') === 'true') {
            tasks[i].style.display = 'flex';
        } else {
            tasks[i].style.display = 'none';
        }
    }
}

function buildTaskList() {
    const tasks = getTasks();

    const taskNodes = tasks.map((task) => {
        const taskNode = document.createElement('task-item');
        Object.entries(task).forEach(([key, value]) => {
            taskNode.setAttribute(key, value);
        });
        taskNode.setAttribute('title', 'Click to toggle task completion');
        return taskNode;
    });

    return taskNodes;
}

window.addEventListener('DOMContentLoaded', () => {
    const upNextBtn = document.getElementById('up-next');
    const completedBtn = document.getElementById('completed');

    const focusDiv = document.getElementById('focus-task');
    const focusDivTitle = document.getElementById('select-focus');
    const tasklist = document.getElementById('task-list-elements');
    const main = document.querySelector('main');

    const taskNodes = buildTaskList();
    let focusNode = null;
    taskNodes.forEach((taskNode) => {
        if (taskNode.getAttribute('focused') === 'true') {
            focusDivTitle.textContent = 'Focusing on:';
            focusNode = taskNode;
            focusDiv.appendChild(taskNode);
        } else {
            tasklist.appendChild(taskNode);
        }
    });

    if (focusNode != null) {
        focusNode.style.display = 'flex';
    }

    const state = localStorage.getItem('state');
    if (state === 'default') {
        main.style.display = 'grid';
    } else {
        main.style.display = 'block';
    }

    // initially hide completed tasks while showing incomplete
    showInComplete();

    // add event listener to buttons
    upNextBtn.addEventListener('click', showInComplete);
    completedBtn.addEventListener('click', showCompleted);
    // document.getElementById('click-snd').volume = localStorage.getItem('volume') / 100;
});
