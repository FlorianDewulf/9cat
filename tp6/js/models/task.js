Task = Backbone.Model.extend({
    urlRoot: "http://localhost:5000/tasks",
    defaults: {
        name: "",
        content: "",
        priority: ""
    },

    initialize: function (_name, _content, _priority) {
        this.set({name: _name, content: _content, priority: _priority});
    }
});
