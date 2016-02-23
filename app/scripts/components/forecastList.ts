import {Component} from 'angular2/core';
import {WeatherService} from "../services/weatherservice";
import {Forecast} from "./forecast";

@Component({
    selector: 'forecasts',
    templateUrl: 'views/forecast.html',
    directives: [Forecast]
})
export class ForecastList {

    constructor(private weatherService: WeatherService) {
        weatherService.loadForecasts();
    }
};