$(document).ready(function() {
  TaskList = Backbone.View.extend({

    template: _.template($('#task-template').html()),

    initialize: function(params) {
      _.bindAll(this, 'render');
    },

    render: function() {
      this.$el.html(this.template(this.collection.models));
    }
  });

});
