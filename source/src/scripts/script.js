import TaskItem from '../components/TaskItem';

window.addEventListener('DOMContentLoaded', () => {
    let tasks; // holds list nodes in local storage
    let id; // id counter for task items

    if (localStorage.getItem('tasks') === null || localStorage.getItem('id') === null) {
        tasks = [];
        id = 0;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        localStorage.setItem('id', `${id}`);
        // console.log('tasks:',localStorage.getItem('tasks'),'\nid:',localStorage.getItem('id'));
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    for (let i = 0; i < tasks.length; i++) {
        const task = new TaskItem(tasks[i]);
        document.getElementById('task-list-elements').appendChild(task);
    }
});
// Uncomment below code to clear local storage on refresh -- Useful for debugging
// window.onbeforeunload = function() {
//     // localStorage.removeItem('tasks');
//     localStorage.clear();
//     return '';
// };
