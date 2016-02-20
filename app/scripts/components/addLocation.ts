import {Component,  Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'add-location',
    templateUrl: 'views/addLocation.html'
})
export class addLocation  {

    @Output() onAdd = new EventEmitter();

    onClick(value) {
        this.onAdd.emit(value);
    }
}
