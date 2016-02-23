import {Injectable} from 'angular2/core';
import {Http, Response, HTTP_PROVIDERS} from "angular2/http";
import 'rxjs/Rx';

@Injectable()
export class WeatherService {

    public locations:Array = [];

    constructor(private http: Http){

    }

    addLocation(zipcode) {
        this.http.get("http://api.openweathermap.org/data/2.5/weather?zip="+zipcode+",us&units=metric&APPID=5a4b2d457ecbef9eb2a71e480b947604")
            .map(res => res.json())
            .subscribe(response => {
                var newLocation = {zip: zipcode, weather: response.weather[0], temp: response.main
                    , name: response.name, id: response.id};
                this.locations.push(newLocation);
            });
    }

    getLocations() {
        return this.locations;
    }

    removeLocation(zipcode: string) {
        for (var i in this.locations) {
            var value = this.locations[i];
            if (value.zip === zipcode)
                this.locations.splice(i, 1);
        }
    }

    loadForecasts() {
        for (let location of this.locations){
            this.http.get("http://api.openweathermap.org/data/2.5/forecast/daily?id="+location.id+"&cnt=5&units=metric&APPID=5a4b2d457ecbef9eb2a71e480b947604")
                .map(res => res.json())
                .subscribe(response => location.forecast = response);
        }
    }

    getWeatherIcon(forecast){
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
