var Tasks = Backbone.Collection.extend({
    model : Task,
    url: "http://localhost:5000/tasks",

    formatData: function(data) {
      this.models = [];
      for (var i = 0 ; i < data.tasks.length ; i++) {
        this.models.push(new Task(data.tasks[i].task.title, data.tasks[i].task.content, data.tasks[i].task.priority, data.tasks[i].id));
      }
    }
});
