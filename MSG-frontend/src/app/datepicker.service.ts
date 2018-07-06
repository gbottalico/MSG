import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatepickerService {

  constructor() { }

  date: Date = new Date();

  @Output() change: EventEmitter<Date> = new EventEmitter();

  bind(date:Date) {
    this.date = date;
    this.change.emit(this.date);
  }
}
