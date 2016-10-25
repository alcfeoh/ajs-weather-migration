export class MainCtrl {

    locations = LocationsService.getLocations();

    constructor(private http: $http,
                private LocationsService: LocationsService) {
    }

    addLocation = function(zipcode){
        http.get("http://api.openweathermap.org/data/2.5/weather?zip="+zipcode+",us&units=metric&APPID=5a4b2d457ecbef9eb2a71e480b947604").
        then(function(response) {
            var newLocation = {zip: zipcode, weather: response.data.weather[0], temp: response.data.main
                , name: response.data.name, id: response.data.id};
            LocationsService.addLocation(newLocation);
        });
    }

    removeLocation = function(zipcode){
        LocationsService.removeLocation(zipcode);
    }

    getWeatherIcon = function(forecast){
        var url = "https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/";
        if (forecast.id >= 200 && forecast.id <= 232)
            return url + "art_storm.png";
        else if (forecast.id >= 501 && forecast.id <= 511)
            return url + "art_rain.png";
        else if (forecast.id === 500 || (forecast.id >= 520 && forecast.id <= 531))
            return url + "art_light_rain.png";
        else if (forecast.id >= 600 && forecast.id <= 622)
            return url + "art_snow.png";
        else if (forecast.id >= 801 && forecast.id <= 804)
            return url + "art_clouds.png";
        else if (forecast.id === 741 || forecast.id === 761)
            return url + "art_fog.png";
        else
            return url + "art_clear.png";

    }

}

MainCtrl.$inject = ['$http', 'LocationsService'];