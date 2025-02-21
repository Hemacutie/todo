document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const taskTime = document.getElementById("taskTime");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        const taskTimeValue = taskTime.value;

        if (taskText === "" || taskTimeValue === "") return;

        const listItem = document.createElement("li");

        const taskSpan = document.createElement("span");
        taskSpan.textContent = `${taskText} - ${taskTimeValue}`;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", () => {
            listItem.remove();
        });

        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = "";
        taskTime.value = "";
    });
});


