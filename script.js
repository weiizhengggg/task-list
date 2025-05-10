//constants declared for input button and task list area
const taskInput = document.querySelector("#newtask input");
const taskSection = document.querySelector(".tasks");

//listener for the Enter key. Used to add a new task
taskInput.addEventListener("keyup", (e) => {
    if(e.key =="Enter") {
        createTask();
    }
});

//the onclick event for the 'Add' button
document.querySelector("#push").onclick = function(){
    createTask();
}

//the functionh that creates a task
function createTask(){
    if(taskInput.value.length == 0){
        alert("The task field is blank. Enter a task name and try again.");
    } else{
        //this block inserts HTML that creates each task into the task area dic element
        taskSection.innerHTML +=
        `<div class="task">
            <label id="taskname">
                <input onclick="updateTask(this)" type="checkbox" id="check-task">
                <p>${document.querySelector("#newtask input").value}</p>
            </label>
            <div class="delete">
                <i class="uil uil-trash"></i>
            </div>
        </div>`;
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        taskSection.offsetHeight >= 300 ? taskSection.classList.add("overflow") : taskSection.classList.remove("overflow");

        //Clear the input field after adding the task
        taskInput.value = "";
    }
}

function updateTask(task){
    let taskItem = task.parentElement.lastElementChild;
    if (task.checked){
        taskItem.classList.add("checked");
    } else{
        taskItem.classList.remove("checked");
    }
}