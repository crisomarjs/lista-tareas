const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList= document.getElementById("task-list");

addButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (e) {
    if(e.key === "Enter"){
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    if(taskText !== ""){
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            ${taskText}
            <button class="delete-button">Eliminar Tarea</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value="";

        const deleteButton = taskItem.querySelector(".delete-button");
        deleteButton.addEventListener("click", function(){
            taskList.removeChild(taskItem);
        });
    }
}