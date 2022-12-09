
const userTask = document.getElementById('user-task');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

const toDoList = [];

const addTask = () => {
        toDoList.push(userTask.value);
        
    }

addTaskBtn.onclick = function(){
    addTask();
    userTask.value = '';
    taskList.innerHTML = '';
    toDoList.forEach((task) => {
        const listItem = document.createElement('li');
        const node = document.createTextNode(task)
        listItem.appendChild(node);
        taskList.appendChild(listItem);
        //taskList.innerHTML = `<li>${task}</li>`;
    });
};