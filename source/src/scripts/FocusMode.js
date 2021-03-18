function toggleState() {
    // elements -- popup button, task list div, pomodoro timer div, focus task
    //const popUpBtn = document.getElementById('popup-button');
    const taskListDiv = document.getElementById('task-list');
    const pomoDiv = document.getElementById('pomodoro-timer');
    const focusTask = document.getElementById('focus-task');
    //popUpBtn.classList.toggle('state');
    taskListDiv.classList.toggle('state');
    pomoDiv.classList.toggle('state');
    focusTask.classList.toggle('state');
    if (localStorage.getItem('state') === 'default') {
        localStorage.setItem('state', 'focus');
    } else {
        localStorage.setItem('state', 'default');
        const title = document.getElementById('select-focus');
        if (title.innerHTML === 'All tasks complete!') {
            title.innerHTML = '';
        }
    }
}
const focusBtn = document.getElementById('focus-button');
focusBtn.addEventListener('click', toggleState);
