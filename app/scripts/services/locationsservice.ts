export class LocationsService {

    public locations:Array = [];

    addLocation(location) {
        this.locations.push(location);
    }

    getLocations() {
        return this.locations;
    }

    removeLocation(zipcode: string) {
        angular.forEach(this.locations, function (value, index) {
                if (value.zip === zipcode)
                    this.locations.splice(index, 1);
            }
        );
    }
}
