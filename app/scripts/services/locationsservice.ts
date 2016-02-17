import {Injectable} from 'angular2/core';

@Injectable()
export class LocationsService {

    public locations:Array = [];

    addLocation(location) {
        this.locations.push(location);
    }

    getLocations() {
        return this.locations;
    }

    removeLocation(zipcode: string) {
        for (var i in this.locations) {
            var value = this.locations[i];
            if (value.zip === zipcode)
                this.locations.splice(i, 1);
        }
    }
}
