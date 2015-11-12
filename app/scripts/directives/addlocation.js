'use strict';

/**
 * @ngdoc directive
 * @name weatherApp.directive:addLocation
 * @description
 * # addLocation
 */
angular.module('weatherApp')
  .directive('addLocation', function () {
    return {
      templateUrl: 'views/addLocation.html',
      restrict: 'E',
      scope: {
        'onAdd' : '='
      }
    };
  });
