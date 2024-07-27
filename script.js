const addTask = document.querySelector("#addButton");

const textInput = document.querySelector(".addTask input");

const sampleTask = document.querySelector("#sample");

const taskList = document.querySelector(".dynamicAdd");

let doneButtons = document.querySelectorAll(".doneButton");

let removeButtons = document.querySelectorAll(".removeButton");

const dynamicAdd = document.querySelector(".dynamicAdd");

let id = 0;

let newTask;

function EventListenerAdder(){
    doneButtons = document.querySelectorAll(".doneButton");
    removeButtons = document.querySelectorAll(".removeButton");

    doneButtons.forEach((button) =>{
        button.addEventListener("click",(evt) =>{
            taskDone(evt);
        });
    })

    removeButtons.forEach((button) =>{
        button.addEventListener("click",(evt) =>{
            taskRemove(evt);
        });
    })

}
function saveData(){
    localStorage.setItem("tasks",document.querySelector(".dynamicAdd").innerHTML);
}
function getData(){
    document.querySelector(".dynamicAdd").innerHTML=localStorage.getItem('tasks');
    EventListenerAdder();
}

function taskDone(evt){
    let tempID = evt.currentTarget.id;

        //if (evt.currentTarget.id == button1.id) {
        let element = document.getElementById(tempID);
        let button1 = element.children[0];
        let button02 = element.children[2];

        if (element.children[1].style.textDecoration === "line-through") {
            element.style.color = "#0f0b84";
            element.style.backgroundColor = "#fff";
            element.children[1].style.textDecoration = "none";
            button02.style.backgroundColor = "#fff";
            button02.style.color = "#0f0b84";
        } 
        else {
            element.style.backgroundColor = "#0f0b84";
            element.style.color = "#fff";
            element.children[1].style.textDecoration = "line-through";
            button02.style.backgroundColor = "#0f0b84";
            button02.style.color = "#fff";
        }
        button1.style.border = "none";
        saveData();
}

function taskRemove(evt){
    let tempID = evt.currentTarget.id;
    let element = document.getElementById(tempID);
    element.remove();
    saveData();        
}

addTask.addEventListener("click", (evt) => {
    let taskInfo = textInput.value;
    if(taskInfo==="")
    {
        alert("Add Task Details First!");
    }
    else {
        textInput.value="";
        newTask = document.createElement("div");
        newTask.innerHTML = sampleTask.innerHTML;
        newTask.classList.add("taskItems");

        let button1 = newTask.children[0];
        let button2 = newTask.children[2];
        let para = newTask.children[1];

        para.innerText = taskInfo;
        ++id;

        newTask.setAttribute("id", `i${id}`);
        button1.setAttribute("id", `i${id}`);
        button2.setAttribute("id", `i${id}`);
        
        taskList.appendChild(newTask);

        button1.addEventListener("click",(evt) =>{
            taskDone(evt);
        });
        button2.addEventListener("click",(evt) =>{
            taskRemove(evt);
        });
        
    }
    saveData();
});

sampleTask.remove();

getData();