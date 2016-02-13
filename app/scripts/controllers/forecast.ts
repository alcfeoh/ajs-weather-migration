export class ForecastCtrl {

    constructor(http: $http, LocationsService: LocationsService) {
        var locations = LocationsService.getLocations();
        for (var i in locations){
            var location = locations[i];
            http.get("http://api.openweathermap.org/data/2.5/forecast/daily?id="+location.id+"&cnt=5&units=metric&APPID=5a4b2d457ecbef9eb2a71e480b947604").
            then(function(response) {
                location.forecast = response.data;
            });
        }
    }
}

ForecastCtrl.$inject = ['$http', 'LocationsService'];


