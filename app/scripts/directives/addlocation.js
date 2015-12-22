'use strict';

/**
 * @ngdoc directive
 * @name weatherApp.directive:addLocation
 * @description
 * # addLocation
 */
function addLocation() {
    return {
      templateUrl: 'views/addLocation.html',
      restrict: 'E',
      scope: {
        'onAdd' : '='
      }
    };
  };
