import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'current-conditions',
    templateUrl: 'views/currentConditions.html'
})
export class currentConditions  {

    @Output() onDelete = new EventEmitter();
    @Input() iconSrc;
    @Input() location;

    onDeleteClick(value) {
        this.onDelete.emit(value);
    }
}