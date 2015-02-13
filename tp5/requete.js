
var host = "http://127.0.0.1:5000/"

$(document).ready(function() {
   getTasks();
    $("#loading").hide();
    $("#block_content").show();

    $("#task_new").click(function() {
        $('#new-wrapper').addClass('show-wrapper');
    });

    $("#task_create").click(function() {

        if (!$.trim($("input").val()) || !$.trim($("textarea").val())) {
           // $("#error").fadeIn();

            $('#error').fadeIn("slow", function() { $(this).delay(2000).fadeOut("slow"); });
        }
        else {
            var title = $("input").val();
            var content = $("textarea").val();
            var priority = $('select option:selected').val()

            var task = {
                title : title,
                content : content,
                priority : priority
            }
            addTask(task);
        }

    });

});


getTasks = function() {
    var request = $.ajax({
        url: host + "tasks",
        type: "GET"
    }).done(function (msg) {

          console.log(msg);
    }).fail(function () {
            alert("error");
        });
}

addTask = function(task)
{
    var newTask = {
        task : task
    }

    var request = $.ajax({
        url: host + "tasks",
        type: "POST",
        dataType : "json",
        contentType : "application/json",
        data : JSON.stringify(newTask)
    }).done(function (msg) {

        console.log("ok");
    }).fail(function () {
        alert("error");
    });

}

changeTask = function(task)
{
    var newTask = {
        task : task
    }

    var request = $.ajax({
        url: host + "tasks/" + "id",
        type: "PUT",
        dataType : "json",
        contentType : "application/json",
        data : JSON.stringify(newTask)
    }).done(function (msg) {
        console.log("ok");
    }).fail(function () {
        alert("error");
    });

}

deleteTask = function()
{
    var request = $.ajax({
        url: host + "tasks/" + "id",
        type: "DELETE"
    }).done(function (msg) {
        console.log("ok");
    }).fail(function () {
        alert("error");
    });

}