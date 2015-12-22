'use strict';

/**
 * @ngdoc directive
 * @name weatherApp.directive:forecast
 * @description
 * # forecast
 */
function forecast() {
    return {
      templateUrl: 'views/forecastDirective.html',
      restrict: 'E',
      scope: {
        'location' : '=',
        'iconSrc': '='
      }
    };
};
