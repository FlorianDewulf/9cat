$(function () {
    var weekCollection = new WeekCollection({});
    weekCollection.url = 'http://api.wunderground.com/api/a6198ab9a542b75f/forecast10day/lang:FR/q/autoip.json';

    var meteoView = null

    var locationObj = new LocationModel({});
    locationObj.url = 'http://api.wunderground.com/api/a6198ab9a542b75f/geolookup/lang:FR/q/autoip.json';
    locationObj.fetch().complete(function() {
      meteoView = new MeteoView({
          collection: weekCollection,
          location: locationObj
      });

      weekCollection.fetch().complete(function () {
          meteoView.render();
      });
    });
});

function tryPerformActionOnTask(validation, callback) {
    $('#error-handler').slideUp('fast');
    if (validation) {
        callback();
    } else {
        $('#error-handler').slideDown('fast');
    }
}
