//Business Logic for TodoList------
function TodoList(){
  this.tasks = [],
  this.currentId = 0
}

TodoList.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks.push(task);
}

TodoList.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
}

TodoList.prototype.findTask = function(id){
  for (var i=0; i<this.tasks.length; i++){
    if(this.task[i]){
      if(this.tasks[i].id == id){
        return this.tasks[i];
      }
    }
  };
  return false;
}

TodoList.prototype.deleteTask = function(id){
  for (var i=0; i<this.tasks.length; i++){
    if(this.task[i]){
      if(this.tasks[i].id == id) {
        delete this.tasks[i];
        return true;
      }
    }
  };
  return false;
}
//Business Logic for Task------
function Task(taskName){
  this.taskName = taskName;
}

Task.prototype.fullTask = function()  {
  return this.taskName + ".";
}




// User Interface Logic----
var todoList = new TodoList();

function displayTodoList(todoListToDisplay) {
  var todoList = $("ul#todoList");
  var htmlForTodoList = "";
  todoListToDisplay.tasks.forEach(function(task) {
    htmlForTodoList += "<li id=" + task.id + ">" + " " + task.taskName + "</li>";
  });
  todoList.html(htmlForTodoList);
};

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var inputTaskName = $("input#new-task").val();
    var newTask = new Task(inputTaskName);
    todoList.addTask(newTask);
    displayTodoList(todoList);
  })
})
