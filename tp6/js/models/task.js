Task = Backbone.Model.extend({
    urlRoot: "http://localhost:5000/tasks",
    defaults: {
      id: "",
      task: {
        title: "",
        content: "",
        priority: ""
      }
    },

    initialize: function (_name, _content, _priority, _id) {
        this.set({
          id: _id,
          task: {
            title: _name, content: _content, priority: _priority
          }
        });
    }
});
