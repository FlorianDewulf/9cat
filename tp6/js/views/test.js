var TaskList = Backbone.View.extend({
  el: "#tasks-container",

  initialize: function() {
    _.bindAll(this, 'render');
    this.render();
  },

  render: function() {
    var that = this;
    var tasks = new Tasks();
    tasks.fetch({
      success: function(tasks) {
        var template = _.template($("#task-template").html(), { tasks: tasks });
        that.$el.html(template({ tasks: tasks.attributes.tasks }));
      }
    });
  }
});

var taskList = new TaskList();
