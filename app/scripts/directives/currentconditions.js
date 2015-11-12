'use strict';

/**
 * @ngdoc directive
 * @name weatherApp.directive:currentConditions
 * @description
 * # currentConditions
 */
angular.module('weatherApp')
  .directive('currentConditions', function () {
    return {
      templateUrl: 'views/currentConditions.html',
      restrict: 'E',
      scope: {
        'location' : '=',
        'onDelete': '=',
        'iconSrc': '='
      }
    };
  });
