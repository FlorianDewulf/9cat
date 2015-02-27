$(document).ready(function() {
  $("#task_new").click(function() {
      $('#new-wrapper').addClass('show-wrapper');
  });


  var taskCollection = new Tasks();
  var taskList = new TaskList({
    collection: taskCollection,
    el: $("#tasks-container")
  });

  taskCollection.fetch().success(function(e) {
    taskCollection.formatData(e);
    taskList.render();
    taskList.$el.fadeIn();
  });

});
