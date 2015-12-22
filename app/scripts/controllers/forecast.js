System.register([], function(exports_1) {
    var ForecastCtrl;
    return {
        setters:[],
        execute: function() {
            ForecastCtrl = (function () {
                function ForecastCtrl(http, LocationsService) {
                    this.http = http;
                    this.LocationsService = LocationsService;
                    angular.forEach(LocationsService.getLocations(), function (location) {
                        http.get("http://api.openweathermap.org/data/2.5/forecast/daily?id=" + location.id + "&cnt=5&units=metric&APPID=5a4b2d457ecbef9eb2a71e480b947604").
                            then(function (response) {
                            location.forecast = response.data;
                        });
                    });
                }
                return ForecastCtrl;
            })();
            ForecastCtrl.$inject = ['$http', 'LocationsService'];
            exports_1("default",ForecastCtrl);
        }
    }
});
//# sourceMappingURL=forecast.js.map