/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
import {LocationsService} from './services/locationsservice';
import {ForecastCtrl} from './controllers/forecast';
import {MainCtrl} from './controllers/main';
import {currentConditions} from './components/currentconditions';
import {Forecast} from './components/forecast';
import {addLocation} from './components/addLocation';
import {UpgradeAdapter} from 'angular2/upgrade';

const upgradeAdapter = new UpgradeAdapter();

upgradeAdapter.addProvider(LocationsService);

angular
    .module('weatherApp', [
        'ngAnimate',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(configure)
    .service('LocationsService', upgradeAdapter.downgradeNg2Provider(LocationsService))
    .controller('MainCtrl', MainCtrl)
    .controller('ForecastCtrl', ForecastCtrl)
    .directive('currentConditions', upgradeAdapter.downgradeNg2Component(currentConditions))
    .directive('forecast', upgradeAdapter.downgradeNg2Component(Forecast))
    .directive('addLocation', upgradeAdapter.downgradeNg2Component(addLocation));

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

upgradeAdapter.bootstrap(document.documentElement, ['weatherApp']);
