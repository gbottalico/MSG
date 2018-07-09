import { Injectable, EventEmitter, Output } from '@angular/core';

import { Visit } from './model/visit';

@Injectable({
  providedIn: 'root'
})
export class EditVisitService {
  visit: Visit;
  showForm:boolean;

  constructor() { }

  @Output() changeForm: EventEmitter<boolean> = new EventEmitter();
  @Output() changeVisit: EventEmitter<Visit> = new EventEmitter();

  set(visit:Visit) {
    this.visit = visit;
    this.changeVisit.emit(this.visit);
  }
  show(){
    this.showForm = true;
    this.changeForm.emit(this.showForm);
  }
  hide(){
    this.showForm = false;
    this.changeForm.emit(this.showForm);
  }
}
