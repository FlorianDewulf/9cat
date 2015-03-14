$(function () {
    var weekCollection = new WeekCollection({});
    weekCollection.url = 'http://api.wunderground.com/api/a6198ab9a542b75f/forecast10day/lang:FR/q/autoip.json';

    var MeteoView = new TaskView({
        collection: weekCollection
    });

    // We add `.complete` callback to render the views only after the `fetch()` is completed.
    weekCollection.fetch().complete(function () {
        meteoView.render();
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
