
var host = "http://127.0.0.1:5000/"

$(document).ready(function() {
   getTasks();
    $("#loading").hide();  //gerer
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
        $('#new-wrapper input').val("");
        $('#new-wrapper textarea').val("");

    });

});

displayTasks = function (data){

    if ( $("#list").length ) {
        $("#list").html("");
    }else{
        var list = $("<div id='list'> <div/>");
        $( "#main_block" ).append(list);
    }

    var tasks = data.tasks;
    tasks.forEach(function (value, index) {
        var id = value.id;
        var content = value.task.content;
        var title = value.task.title;
        var priority = value.task.priority;

        var taskHTML = "<div class='task' id='" + id + "'> <dl class='sub-nav'> <dd class='active'><a href='#'>" + title;

        taskHTML += "</a></dd> <dd class='bind-edit' ><a href='#'>Editer</a></dd> <dd class='bind-delete'><a href='#'>Supprimer</a></dd>";
        taskHTML += "<dd class='priority-" + priority + "'></dd>";
        taskHTML +=  "</dl> <div class='panel panel-override radius'>";
        taskHTML += "<p>" + content + "</p>" + "<div id='edit_block_" + id + "' class='hidden'> <input type='text' placeholder='Title' /> <textarea rows='6'></textarea>";
        taskHTML += "<select> <option value='low'>Basse</option> <option value='medium'>Moyenne</option> <option value='high'>Haute</option> </select>  ";
        taskHTML += "<button id='button-" + id + "'>Editer</button> </div> </div> </div>";

        $( "#list" ).append(taskHTML);
        var test = "#" + id + " dl dd:nth-child(3)";
        console.log(test);

        $(test).on("click", function(){
            deleteTask(id);
        });

        test = "#" + id + " dl dd:nth-child(2)";
        var tmp = "#edit_block_" + id;
        $(test).on("click",  function(){
            $("#" + id + " div p").hide();
            $(tmp + " input").val(title)
            $(tmp + " textarea").val(content);
            $(tmp).show();
        });

        var edit = "#button-" + id;
        $(edit).on("click", function(){

            var titleEdit = $(tmp + " input").val();
            var contentEdit = $(tmp + " textarea").val();


            if (!$.trim(titleEdit) || !$.trim(contentEdit)) {

                if (!$.trim(titleEdit)) {
                    $("#error").text("Le titre ne peut pas etre vide");
                }
                else {
                    $("#error").text("Le contenu ne peut pas etre vide");
                }
                $('#error').fadeIn("slow", function() { $(this).delay(2000).fadeOut("slow"); });
            }
            else {

                var priorityEdit = $(tmp + " select option:selected").val();
                console.log(titleEdit);
                console.log(contentEdit);
                console.log(priorityEdit);
                //
                var task = {
                    title : titleEdit,
                    content : contentEdit,
                    priority : priorityEdit
                }
               changeTask(task, id);
            }
        });
    });
}

getTasks = function() {
    var request = $.ajax({
        url: host + "tasks",
        type: "GET"
    }).done(function (msg) {
        displayTasks(msg);
    }).fail(function () {
        alert("Nous avons rencontré une erreur réseau ");
        });
}

addTask = function(task)
{
    var newTask = {
        task : task
    }
    $('#new-wrapper').removeClass("show-wrapper");
    var request = $.ajax({
        url: host + "tasks",
        type: "POST",
        dataType : "json",
        contentType : "application/json",
        data : JSON.stringify(newTask)
    }).done(function (msg) {
        displayTasks(msg);
    }).fail(function () {
        alert("Nous avons rencontré une erreur réseau ");

    });

}


changeTask = function(task, id)
{
    var newTask = {
        task : task
    }

    var request = $.ajax({
        url: host + "tasks/" + id,
        type: "PUT",
        dataType : "json",
        contentType : "application/json",
        data : JSON.stringify(newTask)
    }).done(function (msg) {
        displayTasks(msg)
    }).fail(function () {
        alert("Nous avons rencontré une erreur réseau ");

    });

}

deleteTask = function(id)
{
    var request = $.ajax({
        url: host + "tasks/" + id,
        type: "DELETE"
    }).done(function (msg) {
        displayTasks(msg)
    }).fail(function () {
        alert("Nous avons rencontré une erreur réseau ");

    });

}