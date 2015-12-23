/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
import LocationsService from './services/locationsservice';
import ForecastCtrl from './controllers/forecast';
import MainCtrl from './controllers/main';
import forecast from './directives/forecast';
import addLocation from './directives/addlocation';
import currentConditions from './directives/currentconditions';
import {UpgradeAdapter} from 'angular2/upgrade';
import {HTTP_PROVIDERS} from 'angular2/http';

const upgradeAdapter = new UpgradeAdapter();
upgradeAdapter.addProvider(HTTP_PROVIDERS);
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
  .directive('addLocation', addLocation)
  .directive('forecast', forecast)
  .directive('currentConditions', currentConditions);

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