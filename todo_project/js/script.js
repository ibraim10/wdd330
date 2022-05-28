'use strict';

const date = document.querySelector('#date');
const input = document.querySelector('input');
const btn = document.querySelector('#addBtn');
const list = document.querySelector('ul');
const deleteBtn = document.querySelector('.delete');
const check = "check";
const unCheck = "unCheck";
const line = "line";
let complete = document.querySelector(".unCheck");
let id;
let tasksArray;
const activeBtn = document.querySelector("#activeBtn");
const completedBtn = document.querySelector("#completedBtn");
const allBtn = document.querySelector("#allBtn");
const show = 'show';
const unShow = 'unShow';
const active = 'active';
const completed = 'completed';
const all = 'all';
const taskNumber = document.querySelector("#tasksLeft");


//date
const newDate = new Date().toDateString();
date.innerHTML = `${newDate}`
//<span>⬜</span><span>✅</span>
//function to add a task
function addTask(task, id, completed, deleted){

    if(deleted){return}

    const COMPLETED = completed ? check : unCheck;
    const LINE = completed ? line : "";

    const newTask = `
    <li id="${id}">
        <button class=" ${COMPLETED}" data="completed" id="${id}"></button>
        <p class="${LINE} task">${task}</p>
        <button class="btn delete" data="deleted" id="${id}">❌</button>
    </li>    
    `
    list.insertAdjacentHTML("beforeend",newTask);
    sort()
}

//function to complete a task
function completedTask(element){
    element.classList.toggle(check);
    element.classList.toggle(unCheck);
    element.parentNode.classList.toggle(show);
    element.parentNode.querySelector(".task").classList.toggle(line);
    tasksArray[element.id].completed = tasksArray[element.id].completed ? false : true;
    sort()
}

//function to delete task
function deleteTask(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    tasksArray[element.id].deleted = true;
}

// function removeTask(task){
//     let newDelete = document.querySelector('li');
// }
btn.addEventListener('click', function(){
    let task = input.value;
    if(task){
        addTask(task, id, false, false);
        tasksArray.push({
            name: task,
            id: id,
            completed: false,
            deleted: false
        })
    }
    localStorage.setItem('TODO', JSON.stringify(tasksArray))
    input.value = '';
    input.focus();
    id++;
    sort()
})

list.addEventListener('click', function(event){
    const element = event.target;
    const elementData = element.attributes.data.value;
    if(elementData==='completed'){
        completedTask(element);
    }
    else if (elementData==='deleted'){
        deleteTask(element);
    }
    localStorage.setItem('TODO', JSON.stringify(tasksArray))
    sort()
})


//localStorage get item
let data = localStorage.getItem('TODO');
if(data){
    tasksArray = JSON.parse(data);
    id = tasksArray.length
    updateTasks(tasksArray);
}else{
    tasksArray = []
    id = 0
}

function updateTasks(elementData){
    elementData.forEach(elements => {
        addTask(elements.name, elements.id, elements.completed, elements.deleted);
    });
}

// const sort = () =>{
//     const done = [];
//     active.forEach(i => {
//         i.classList.add(show) ? done.push(i):""
//     })
// }

activeBtn.addEventListener('click', function(event){
    if(list.attributes.class.value === 'list active'){
        list.classList.toggle(active);
    }else if(list.attributes.class.value === 'list all'){
        list.classList.toggle(all);
    }
    list.classList.toggle(completed);
})
completedBtn.addEventListener('click', function(event){
    if(list.attributes.class.value === 'list completed'){
        list.classList.toggle(completed);
    }else if(list.attributes.class.value === 'list all'){
        list.classList.toggle(all);
    }
    list.classList.toggle(active);
})
allBtn.addEventListener('click', function(event){
    if(list.attributes.class.value === 'list completed'){
        list.classList.toggle(completed);
    }
    else if(list.attributes.class.value === 'list active'){
        list.classList.toggle(active);
    }
    list.classList.toggle(all);
})

// function countTasks(){
//     const elementData = list.attributes.data.value
//     console.log(elementData)
// }
// countTasks()

// const element = event.target;
// const elementClass = element.attributes.class.value;
// console.log(element)
// console.log(elementClass)
//     if(elementClass === 'check'){
//         console.log('yes')
//         element.classList.toggle(show);
//         element.classList.toggle(unShow);
//     }
//     sort()
    
//     console.log(done)
//     const sortA = () =>{ 
//         sort().forEach(i => { tasksArray.appendChild(i)
        
//     })
//     }
//     console.log(sortA())
//     // i.classList.toggle(show)})
//     // console.log(done)
//     // done.classList.toggle(show);
    

function sort(){
    //let done = [];
    let unDone = [];
    let active = tasksArray.filter(tasksArray => tasksArray.completed == false && tasksArray.deleted == false);
    //let unActive = tasksArray.filter(tasksArray => tasksArray.completed == false);
    active.forEach(i => {unDone.push(i)})
    //unActive.forEach(i => {unDone.push(i)})
    const num = unDone.length;
    console.log(num)


    const taskLeft = `${num} tasks left`
    taskNumber.textContent = taskLeft;
}


// activeBtn.addEventListener('click', function(event){

// }


// function completeTask(){
//     document.querySelectorAll(".check").classList.toggle("complete");
// }
// document.querySelectorAll(".check").onclick = function(){
//     completeTask()
//     }

// deleteBtn.addEventListener('click', function(){
//     list.removeChild(newDelete);   
// })