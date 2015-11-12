'use strict';

/**
 * @ngdoc directive
 * @name weatherApp.directive:forecast
 * @description
 * # forecast
 */
angular.module('weatherApp')
  .directive('forecast', function () {
    return {
      templateUrl: 'views/forecastDirective.html',
      restrict: 'E',
      scope: {
        'location' : '=',
        'iconSrc': '='
      }
    };
  });
