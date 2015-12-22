'use strict';

/**
 * @ngdoc directive
 * @name weatherApp.directive:currentConditions
 * @description
 * # currentConditions
 */
function currentConditions() {
    return {
      templateUrl: 'views/currentConditions.html',
      restrict: 'E',
      scope: {
        'location' : '=',
        'onDelete': '=',
        'iconSrc': '='
      }
    };
  };
