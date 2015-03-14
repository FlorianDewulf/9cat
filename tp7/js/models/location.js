(function() {
    LocationModel = Backbone.Model.extend({
        defaults: {
        },
        parse: function(response) {
            return response.location;
        },
        validate: function (attrs) {
            return true;
        }
    });
})();
