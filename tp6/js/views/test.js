var TaskList = Backbone.View.extend({
  el: "#tasks-container",

  initialize: function() {
    _.bindAll(this, 'render');
    this.render();
  },

  render: function() {
    console.log("Waffen SS");
    var that = this;
    var tasks = new Tasks();
    tasks.fetch({
      success: function(tasklist) {
        console.log(tasklist.attributes.tasks);
        var template = _.template($("#task-template").html(), { tasks: tasklist.attributes.tasks });
        console.log(template);
        that.$el.html(template);
      }
    });
  }
});

var taskList = new TaskList();

console.log("mdr");
