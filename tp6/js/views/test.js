$(document).ready(function() {
  TaskList = Backbone.View.extend({
    template: _.template($("#task-template").html()),

    initialize: function(params) {
      this.collection = params.collection;
      _.bindAll(this, 'render');
      //var self = this;
      // Lorsque la collection change, appel de la fonction render pour mettre à jour la vue!
      /*this.collection.bind("change", function() {
      	self.render();
      });*/
    },

    render: function() {
      /*console.log(this.collection);
      var template = _.template($("#task-template").html(), { tasks: this.collection });
      console.log(template)*/
      this.$el.html(this.template, { tasks : this.collection });
    }
  });
});
