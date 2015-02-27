$(document).ready(function() {
  $("#task_new").click(function() {
      $('#new-wrapper').addClass('show-wrapper');
  });

  var taskList = new TaskList();

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
            $('#error').fadeIn("slow", function() { $(this).delay(2000).fadeOut("slow"); });
        }
        else {

            var priority = $('select option:selected').val()

            var task = {
                title : title,
                content : content,
                priority : priority
            }
            addTask(task);
        }
        $('#new-wrapper input').val("");
        $('#new-wrapper textarea').val("");

    });
});
