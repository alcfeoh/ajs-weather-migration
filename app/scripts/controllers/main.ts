import {WeatherService} from "../services/weatherservice";

export class MainCtrl {

    constructor(private weatherService: WeatherService) {
        this.locations = weatherService.getLocations();
    }
}

MainCtrl.$inject = ['WeatherService'];
