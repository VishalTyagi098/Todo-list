// SELECTORS
const todoInput= document.querySelector('.search-input');
const todoBtn= document.querySelector('.search-btn');
const todoList= document.querySelector('.todo-list');
const filterOption=document.querySelector('.filter-todo')

// EVENT LISTENERS
todoBtn.addEventListener("click",addTodo);
todoList.addEventListener("click",deletecheck);
filterOption.addEventListener('click',filterTodo);




// FUNCTIONS

function addTodo(event){
  // PREVENTS BUTTON FROM SUBMITTING 
  event.preventDefault();

  // CREATE DIV 
  const todoDiv= document.createElement('div');
  todoDiv.classList.add("todo");
  // CREATE LI
  const todoItem= document.createElement('li');
  todoItem.classList.add("todo-item");

  todoItem.innerText=todoInput.value;
  todoDiv.appendChild(todoItem);

  // CREATE CHECK MARK BTN
  const completeBtn= document.createElement('button');
  completeBtn.classList.add("complete-btn");

  completeBtn.innerHTML='<i class="fas fa-check"></i>';
  todoDiv.appendChild(completeBtn);
  
  // CREATE TRASH BTN
  const trashBtn= document.createElement('button');
  trashBtn.classList.add("trash-btn");

  trashBtn.innerHTML='<i class="fas fa-trash"></i>'
  todoDiv.appendChild(trashBtn);

  // APPENDING COMPLETE TODO-DIV INTO TODO-LIST
  todoList.appendChild(todoDiv);
}

function deletecheck(e){
  const item= e.target;
  if(item.classList[0]==="trash-btn"){
    const todo = item.parentElement;
    todo.classList.add('delete-transition')
    todo.addEventListener('transitionend',function(){
      todo.remove()
    })
  }
  if(item.classList[0]==="complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle('complete-transition')
  }
}

function filterTodo(e){
  let todos=todoList.childNodes;
  todos.forEach(function(todo){
    
    switch (e.target.value){
      case "all":
        console.log("all")
        todo.style.display="flex";
        break;

      case "completed":
        console.log("works")
        if(todo.classList.contains("complete-transition")){
          todo.style.display="flex";
        }
        else{
          todo.style.display="none"
        }
        break;

      case "uncompleted":
        console.log("works")
        if(!todo.classList.contains("complete-transition")){
          todo.style.display="flex";
        }
        else{
          todo.style.display="none"
        }
        break;
    }
    
  })

}