


// Button click adds text to page
function addTask() {
    const taskDiv = document.getElementById('task-div');
    const taskBox = document.getElementById('task-box');
    const taskButton = document.querySelectorAll('.task-button');

    taskButton.forEach((button)=> {
        button.addEventListener('click', renderTask);
    });
    
    function renderTask() {
        const taskBlock = document.createElement('div');
        const taskInput = document.getElementById('task-input');
        const inputValue = taskInput.value;

        taskBlock.innerHTML = inputValue;
        taskDiv.appendChild(taskBlock); 
    }
}

addTask();

