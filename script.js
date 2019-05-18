document.addEventListener("DOMContentLoaded",function () {
    const input = document.getElementById("add-task-input")
    const addBtn = document.getElementById("add-task-btn")
    const taskListDiv = document.getElementById("task-list")

    let tasks = [];
    renderList();


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

        fetch("http://localhost:8080/tasks")
            .then(function (response) {
                return response.json();
            }).then(function (data) {
            console.log(data);
            tasks = [];
            for(let i =0; i<data.length;i++) {
                console.log(data[i])
                tasks.push(new Task(data[i].id,data[i].description,data[i].status,data[i].createDate));
            }
        }).then(function(){
            taskListDiv.innerHTML = '';
            for (let i = 0;i<tasks.length;i++) {
                taskListDiv.innerHTML += `
                                      <div id="task-title"><h3>${tasks[i].title}</h3>
                                                           <h4>${tasks[i].createDate}</h4></div>
                                      <button id="delete-btn" onclick="deleteTask(${tasks[i].id})">Usuń</button>`;
            }
        })



    }

})











