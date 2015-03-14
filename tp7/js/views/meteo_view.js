$(function() {
    MeteoView = Backbone.View.extend({
        template: _.template($('#meteo-tpl').html()),
        el: "#meteo-list",
        initialize: function(params) {
          this.location = params.location;

            // You'll see the `_.bindAll()` function in almost every `initialize`.
            // See this StackOverflow [answer](http://stackoverflow.com/a/6396224/884338 "JSONP") to why `_.bindAll()` is necessary.
            _.bindAll(this, 'render');

            // Keep `this` in a variable to use in a different scope (as in `this.collection.bind()` ).
            var self = this;

            // We want the view to render itself each time the model is changed.
            // We can bind to any events like this.
            this.collection.bind('sync', function() {
                self.render();
            });
        },
        render: function() {
          console.log(this.location);
            // Pass the collection (as a JSON) to the template to be rendered.
            this.$el.html(this.template({
                location: this.location.toJSON(),
                week: this.collection.toJSON()
            }));
        }
    });

});
