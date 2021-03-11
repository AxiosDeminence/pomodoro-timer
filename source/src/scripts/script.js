// require('../components/TaskItem');
// const TaskItem = require('../components/TaskItem');
window.addEventListener('DOMContentLoaded', () => {
    let tasks;      // holds list nodes in local storage
    let id;         // id counter for task items
    let theme;      // UI theme
    let volume;     // default volume -> initialized to 50
    if (localStorage.getItem('tasks') === null || localStorage.getItem('id') === null) {
        tasks = [];
        id = 0;
        theme = 'light';
        volume = 50;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        localStorage.setItem('id', `${id}`);
        localStorage.setItem('theme', theme);
        localStorage.setItem('volume', '' + volume);
    } 
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
        theme = localStorage.getItem('theme');
        // save dark theme on refresh
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
        }
    }
    // create task items if exists in local storage
    for (let i = 0; i < tasks.length; i += 1) {
        const task = document.createElement('task-item');
        task.setAttribute('id', tasks[i].id);
        task.setAttribute('checked', tasks[i].checked);
        task.setAttribute('text', tasks[i].text);
        document.getElementById('task-list-elements').appendChild(task);
    }
});

// Uncomment below code to clear local storage on refresh -- Useful for debugging
// window.onbeforeunload = function() {
//     localStorage.clear();
//     return '';
// };
