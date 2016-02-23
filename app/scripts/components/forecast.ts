import {Component, Input} from 'angular2/core';
import {WeatherService} from "../services/weatherservice";

@Component({
    selector: 'forecast',
    templateUrl: 'views/forecastComponent.html'
})
export class Forecast {

    @Input() location;

    constructor(private weatherService: WeatherService) {

    }
};