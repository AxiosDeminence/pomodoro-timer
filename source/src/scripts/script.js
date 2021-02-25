window.addEventListener('DOMContentLoaded', () => {
    var tasks; // holds list nodes in local storage
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
        localStorage.setItem('tasks', JSON.stringify(tasks));
        console.log('no local storage');
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
var popupBtn = document.getElementById('task-popup-btn');
var popUp = document.createElement('task-popup');
document.body.appendChild(popUp);
popupBtn.addEventListener('click', function() {
    popUp.shadowRoot.getElementById('add-task-popup').setAttribute('style', 'display:block');
});