$(document).ready(function() {
    TaskList = Backbone.View.extend({

        template: _.template($('#task-template').html()),

        events: {
            'click #delete-task': 'deleteTask',
            'click #edit-task': 'editTask',

        },

        deleteTask: function(e) {
            var id = $(e.currentTarget).parent().parent().attr('id');

            for (var i = 0 ; i < this.collection.models.length ; i++) {
                if (this.collection.models[i].id == id)
                {
                    var that = this;
                    this.collection.models[i].destroy({success : function (model) {
                        that.collection.remove(model);
                        that.render();
                    }
                    });

                }
            }
        },

        editTask: function(e) {
            var id = $(e.currentTarget).parent().parent().attr('id');

            //for (var i = 0 ; i < this.collection.models.length ; i++) {
            //    if (this.collection.models[i].id == id)
            //    {
            //        var that = this;
            //        this.collection.models[i].destroy({success : function (model) {
            //            that.collection.remove(model);
            //            that.render();
            //        }
            //        });
            //
            //    }
            //}
        },

        initialize: function(params) {
            _.bindAll(this, 'render');
            this.collection.on('change', this.render, this);
        },

        render: function() {
            this.$el.html(this.template(this.collection.models));
        }
    });

});
