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
  
    $("#task_create").click(function() {

        var title = $("input").val();
        var content = $("textarea").val();
        if (!$.trim(title) || !$.trim(content)) {

            if (!$.trim(title)) {
                $("#error").text("Le titre ne peut pas etre vide");
            }
            else {
                $("#error").text("Le contenu ne peut pas etre vide");
            }
            $('#error').fadeIn("slow", function () {
                $(this).delay(2000).fadeOut("slow");
            });
        }
        else {

            var priority = $('select option:selected').val()

            var ta
            var task = {
                title: title,
                content: content,
                priority: priority
            }
         //   addTask(task);
        }
        $('#new-wrapper input').val("");
        $('#new-wrapper textarea').val("");

    });
});
