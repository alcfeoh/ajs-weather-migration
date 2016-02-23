import {WeatherService} from "../services/weatherservice";

export class ForecastCtrl {

    locations = [];

    constructor(weatherService: WeatherService) {
        weatherService.loadForecasts();
        this.locations = weatherService.getLocations();
    }
}

ForecastCtrl.$inject = ['WeatherService'];


