
var host = "http://127.0.0.1:5000/"

$(document).ready(function() {
   getTasks();
    $("#loading").hide();
    $("#block_content").show();

    $("#task_new").click(function() {
        $('#new-wrapper').addClass('show-wrapper');
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

    });

});

displayTasks = function (data){

    if ( $("#list").length ) {
        $("#list").remove();
    }
    var list = $("<div id='list'> <div/>");
    $( "#main_block" ).append(list);


    var tmp = data.tasks;
    tmp.forEach(function (value, index) {
        var id = tmp[index].id;
        var content = tmp[index].task.content;
        var title = tmp[index].task.title;
        var priority = tmp[index].task.priority;

        var taskHTML = "<div class='task' id='" + id + "'> <dl class='sub-nav'> <dd class='active'><a href='#'>" + title;

        taskHTML += "</a></dd> <dd class='bind-edit'><a href='#'>Editer</a></dd> <dd class='bind-delete'><a href='#'>Supprimer</a></dd>";
        taskHTML += "<dd class='priority-" + priority + "'></dd>";
        taskHTML +=  "</dl> <div class='panel panel-override radius'>";
        taskHTML += "<p>" + content + "</p>" + "<button id='edit_task' task-id='" + id + "'>Editer</button> </div> </div>";
        $( "#list" ).append(taskHTML);
    });
}

getTasks = function() {
    var request = $.ajax({
        url: host + "tasks",
        type: "GET"
    }).done(function (msg) {
        displayTasks(msg);
        //  console.log(msg);
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
        displayTasks(msg);
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