import {Component} from 'angular2/core';
import {WeatherService} from "../services/weatherservice";
import {addLocation} from "./addLocation";
import {currentConditions} from "./currentconditions";

@Component({
    selector: 'main-page',
    templateUrl: 'views/main.html',
    directives: [addLocation, currentConditions]
})
export class MainPage {

    constructor(private weatherService: WeatherService) {
        weatherService.loadForecasts();
    }
};