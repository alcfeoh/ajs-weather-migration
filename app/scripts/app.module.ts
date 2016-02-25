/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
import {HTTP_PROVIDERS} from "angular2/http";
import {WeatherService} from './services/weatherservice';
import {currentConditions} from './components/currentconditions';
import {Forecast} from './components/forecast';
import {addLocation} from './components/addLocation';
import {ForecastList} from "./components/forecastList";
import {MainPage} from "./components/mainPage";
import {RouteConfig, LocationStrategy, HashLocationStrategy, ROUTER_DIRECTIVES,ROUTER_PROVIDERS} from "angular2/router";
import {bootstrap} from 'angular2/platform/browser';
import {Component, provide} from "angular2/core";

@RouteConfig([
    {path:'/', component: MainPage},
    {path:'/forecast', component: ForecastList}
])
@Component({
    selector: 'weather-app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})
class AppComponent {

}

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    ROUTER_DIRECTIVES,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    WeatherService
]);
