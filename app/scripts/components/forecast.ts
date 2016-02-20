import {Component, Input} from 'angular2/core';

@Component({
    selector: 'forecast',
    templateUrl: 'views/forecastComponent.html'
})
export class Forecast {

    @Input() iconSrc;
    @Input() location;
};