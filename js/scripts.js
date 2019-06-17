

// User Interface----
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("input#new-task").val()
    $("#todoList").append(userInput + "<br>");
  })
})
