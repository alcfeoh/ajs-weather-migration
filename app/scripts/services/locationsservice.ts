class LocationsService {

    public locations:Array = [];

    addLocation(location) {
        this.locations.push(location);
    }

    getLocations() {
        return this.locations;
    }

    removeLocation(zipcode: string) {
        for (var i in this.locations) {
                if (this.locations[i].zip === zipcode)
                    this.locations.splice(i, 1);
        }
    }
}

export default LocationsService;

