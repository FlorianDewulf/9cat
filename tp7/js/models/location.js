(function() {
    LocationModel = Backbone.Model.extend({
        defaults: {
        },
        parse: function(response) {
            // Make sure the id is valid.
            this.id = response.id;
            return response;
        },
        validate: function (attrs) {
            return true;
        }
    });
})();
