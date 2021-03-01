window.addEventListener('DOMContentLoaded', () => {
    var tasks; // holds list nodes in local storage
    var id; // id counter for task items
    if (localStorage.getItem('tasks') === null || localStorage.getItem('id') === null) {
        tasks = [];
        id = 0;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        localStorage.setItem('id', '' + id);
        console.log('tasks:',localStorage.getItem('tasks'),'\nid:',localStorage.getItem('id'));
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    for (let i = 0; i < tasks.length; i++) {
        var task = new TaskItem(tasks[i]);
        document.getElementById("task-list-elements").appendChild(task);
    }
});

// button that opens the custom popup component to DOM
const popupBtn = document.getElementById('task-popup-btn');
const popUp = document.createElement('task-popup');
document.body.appendChild(popUp);
popupBtn.addEventListener('click', function() {
    popUp.shadowRoot.getElementById('add-task-popup').setAttribute('style', 'display:block');
});

// Uncomment below code to clear local storage on refresh -- Useful for debugging
// window.onbeforeunload = function() {
//     localStorage.removeItem('tasks');
//     return '';
// };