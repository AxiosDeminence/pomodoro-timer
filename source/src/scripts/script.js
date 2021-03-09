// require('../components/TaskItem');

// const TaskItem = require('../components/TaskItem');
window.addEventListener('DOMContentLoaded', () => {
    let tasks; // holds list nodes in local storage
    let id; // id counter for task items
    let theme; // UI theme
    if (localStorage.getItem('tasks') === null || localStorage.getItem('id') === null) {
        tasks = [];
        id = 0;
        theme = 'light';
        localStorage.setItem('tasks', JSON.stringify(tasks));
        localStorage.setItem('id', `${id}`);
        localStorage.setItem('theme', theme);
        localStorage.setItem('volume', '' + 50);
        // console.log('tasks:',localStorage.getItem('tasks'),'\nid:',localStorage.getItem('id'));
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
        theme = localStorage.getItem("theme");
        if (theme == 'dark') {
            document.body.classList.add("dark-theme");
        }
    }
    for (let i = 0; i < tasks.length; i += 1) {
        const task = document.createElement('task-item');
        task.setAttribute('id', tasks[i].id);
        task.setAttribute('checked', tasks[i].checked);
        task.setAttribute('text', tasks[i].text);
        // new TaskItem(tasks[i]);
        document.getElementById('task-list-elements').appendChild(task);
    }
});
// Uncomment below code to clear local storage on refresh -- Useful for debugging
window.onbeforeunload = function() {
    // localStorage.removeItem('tasks');
    localStorage.clear();
    return '';
};
