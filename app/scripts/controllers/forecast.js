'use strict';

/**
 * @ngdoc function
 * @name weatherApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the weatherApp
 */
angular.module('weatherApp')
  .controller('ForecastCtrl', function ($http, LocationsService) {

    angular.forEach(LocationsService.getLocations(), function(location, index) {
        $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?id="+location.id+"&cnt=5&units=metric&APPID=5a4b2d457ecbef9eb2a71e480b947604").
          then(function(response) {
            location.forecast = response.data;
          });
      }
    );

  });
