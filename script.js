document.addEventListener("DOMContentLoaded",function () {
    const input = document.getElementById("add-task-input")
    const addBtn = document.getElementById("add-task-btn")
    const taskListDiv = document.getElementById("task-list")

    let tasks = [];



    addBtn.addEventListener("click",function(){

        console.log('Button clicked ' + input.value);
        let task = new Task(input.value);
        tasks.push(task);
        console.log(tasks);
        renderList();
        input.value = null;
    });
    console.log(input.value);

    deleteTask = function deleteTask(taskId) {
        console.log(taskId)
        tasks = tasks.filter(function (element) {
            return element.id !== taskId;
        })
        console.log(tasks);
        renderList();
    }

    function renderList() {
        taskListDiv.innerHTML = '';
        for (let i = 0;i<tasks.length;i++) {
            taskListDiv.innerHTML += `<div id="task-id">` + tasks[i].id +`</div>
                                  <div id="task-title"> ${tasks[i].title}</div>
                                  <button id="delete-btn" onclick="deleteTask(${tasks[i].id})">Usuń</button>`;
        }

    }

})











