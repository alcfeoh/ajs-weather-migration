'use strict';

/**
 * @ngdoc service
 * @name weatherApp.LocationsService
 * @description
 * # LocationsService
 * Service in the weatherApp.
 */
angular.module('weatherApp')
    .service('LocationsService', function () {
        var vm = this;
        vm.locations = [];

        vm.addLocation = function(location) {
            vm.locations.push(location);
        }

        vm.getLocations = function() {
            return vm.locations;
        }

        vm.removeLocation = function(zipcode) {
            angular.forEach(vm.locations, function (value, index) {
                    if (value.zip === zipcode)
                        vm.locations.splice(index, 1);
                }
            );
        }
    });
