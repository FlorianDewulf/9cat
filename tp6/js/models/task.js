
    Task = Backbone.Model.extend({
        defaults: {
            name: "",
            content: "",
            priority: ""
        },

        initialize: function (_name, _content, _priority) {
            this.set({name: _name, content: _content, priority: _priority});

        }
    });
