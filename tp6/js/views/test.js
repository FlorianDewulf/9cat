$(document).ready(function() {
    TaskList = Backbone.View.extend({

        template: _.template($('#task-template').html()),


        events: {
            'click #delete-task': 'deleteTask',
            'click #edit-task': 'editTask',
            'click #edit-button' : 'changeTask'

        },

        deleteTask: function(e) {
            var id = $(e.currentTarget).parent().parent().attr('id');

            for (var i = 0 ; i < this.collection.models.length ; i++) {
                if (this.collection.models[i].id == id)
                {
                    var that = this;
                    this.collection.models[i].destroy({success : function () {
                        var thus = that;
                        that.collection = new Tasks();
                        that.collection.fetch().success(function(e) {
                            thus.collection.formatData(e);
                            thus.$el.empty();
                            thus.render();
                        });
                    }
                    });
                }
            }

        },


        editTask: function(e) {
            var title, content, priority;
            var id = $(e.currentTarget).parent().parent().attr('id');
            for (var i = 0 ; i < this.collection.models.length ; i++) {
                if (this.collection.models[i].id == id)
                {
                    title = this.collection.models[i].attributes.task.title;
                    content = this.collection.models[i].attributes.task.content;
                    priority = this.collection.models[i].attributes.task.priority;
                }
            }
            var tmp = "#edit_block_" + id;
            console.log(tmp);
            $("#" + id + " div p").hide();
            $(tmp + " input").val(title);
            $(tmp + " textarea").val(content);
            $(tmp).show();
        },

        changeTask: function(e) {
            var id = $(e.currentTarget).parent().parent().parent().attr('id');            
            var titleEdit = $("#edit_block_" + id + " input").val();
            var contentEdit = $("#edit_block_" + id + " textarea").val();
            var priorityEdit = $("#edit_block_" + id + " select option:selected").val();

            if (!$.trim(titleEdit) || !$.trim(contentEdit)) {

                if (!$.trim(titleEdit)) {
                    $("#error").text("Le titre ne peut pas etre vide");
                }
                else {
                    $("#error").text("Le contenu ne peut pas etre vide");
                }
                $('#error').fadeIn("slow", function() { $(this).delay(2000).fadeOut("slow"); });
            }
            else
            {
               for (var i = 0 ; i < this.collection.models.length ; i++) {
                if (this.collection.models[i].id == id)
                {
                    var that = this;
                    this.collection.models[i].attributes.task.title = titleEdit;
                    this.collection.models[i].attributes.task.content = contentEdit;
                    this.collection.models[i].attributes.task.priority = priorityEdit;
                    this.collection.models[i].save().success(function(){
                        $("#edit_block_" + id).hide();
                         $("#" + id + " div p").show();
                         that.render();
                    });
                }
            } 
            }
        },

        initialize: function(params) {
            _.bindAll(this, 'render');
            this.collection.on('change', this.render, this);

        },

        render: function() {
            this.$el.html(this.template(this.collection.models));
            this.collection.on('all', this.render, this);


        }
    });

});
