//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//functions
function addTodo(event){
    //Prevent form from submiting
    event.preventDefault();
    //Create the Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('completed-btn');
    todoDiv.appendChild(completedButton);
    //Check Trash 
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //Append todoDiv to list
    todoList.appendChild(todoDiv);

    //Clear todoInput value
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
   if (item.classList[0] === "trash-btn") {
       const todo = item.parentElement;
       //Animation
       todo.classList.add('fall');
       todo.addEventListener('transitionend', function(){
           todo.remove();
       })
   }

   if (item.classList[0] === "completed-btn"){
       const todo = item.parentElement;
       todo.classList.toggle('completed');
   }
}

