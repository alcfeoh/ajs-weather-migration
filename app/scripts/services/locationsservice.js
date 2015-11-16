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
        for (var i in this.locations) {
            if (this.locations[i].zip === zipcode)
                this.locations.splice(i, 1);
        }
    };
    return LocationsService;
})();
angular
    .module('weatherApp')
    .service('LocationsService', LocationsService);
//# sourceMappingURL=locationsservice.js.map