var LocationsService = (function () {
    function LocationsService() {
        this.locations = [];
    }
    LocationsService.prototype.addLocation = function (location) {
        this.locations.push(location);
    };
    LocationsService.prototype.getLocations = function () {
        return this.locations;
    };
    LocationsService.prototype.removeLocation = function (zipcode) {
        angular.forEach(this.locations, function (value, index) {
            if (value.zip === zipcode)
                this.locations.splice(index, 1);
        });
    };
    return LocationsService;
})();
angular
    .module('weatherApp')
    .service('LocationsService', LocationsService);
//# sourceMappingURL=locationsservice.js.map