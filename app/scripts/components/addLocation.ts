import {Component} from 'angular2/core';
import {WeatherService} from "../services/weatherservice";

@Component({
    selector: 'add-location',
    templateUrl: 'views/addLocation.html'
})
export class addLocation  {

    constructor(private weatherService: WeatherService){
    }
}
