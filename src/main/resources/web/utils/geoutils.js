function getCurrentPosition_mc() {
    return {
        render: function (element) {
        },

        update: function (element, controller, options) {
            if (!options.timestamp || (Date.now() - options.timestamp > options.cacheTimeout * 1000)) {
                navigator.geolocation.getCurrentPosition(function (pos) {
                    controller.changeValue(pos);
                }, function (err) {
                    console.warn(`ERROR(${err.code}): ${err.message}`);
                    // controller.changeValue(err);
                }, options);
            }
        }
    }
}