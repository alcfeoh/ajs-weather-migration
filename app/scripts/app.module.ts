/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
import LocationsService from './services/locationsservice';
import ForecastCtrl from './controllers/forecast';
import MainCtrl from './controllers/main';

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
    .controller('ForecastCtrl', ForecastCtrl);

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
