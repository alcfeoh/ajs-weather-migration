/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
import {LocationsService} from './services/locationsservice';
import {ForecastCtrl} from './controllers/forecast';
import {MainCtrl} from './controllers/main';
import {currentConditions} from './components/currentconditions';
import {forecast} from './components/forecast';
import {addLocation} from './components/addLocation';

angular
    .module('weatherApp', [
        'ngAnimate',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(configure)
    .service('LocationsService', LocationsService)
    .controller('MainCtrl', MainCtrl)
    .controller('ForecastCtrl', ForecastCtrl)
    .component('currentConditions', currentConditions)
    .component('forecast', forecast)
    .component('addLocation', addLocation);

configure.$inject = ['$routeProvider'];

function configure($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html'
        })
        .when('/forecast', {
             templateUrl: 'views/forecast.html',
             controller:  'ForecastCtrl',
             controllerAs: 'fcast'
        })
        .otherwise({
            redirectTo: '/'
        });
};
