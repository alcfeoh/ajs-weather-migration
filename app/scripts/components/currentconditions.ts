import {Component, Input} from 'angular2/core';
import {WeatherService} from "../services/weatherservice";

@Component({
    selector: 'current-conditions',
    templateUrl: 'views/currentConditions.html'
})
export class currentConditions  {

    @Input() location;

    constructor(private weatherService: WeatherService){
    }
}