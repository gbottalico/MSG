import { Injectable, EventEmitter, Output } from '@angular/core';

import { Visit } from './model/visit'

@Injectable({
  providedIn: 'root'
})
export class VisitEventService {
  editVisitModel: Visit;
  newVisitModel: Visit;
  showForm:boolean;

  @Output() newVisitCreatedEvent: EventEmitter<Visit> = new EventEmitter();

  @Output() showEditFormEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() showNewFormEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() newVisitChangedEvent: EventEmitter<Visit> = new EventEmitter();
  @Output() editVisitChangedEvent: EventEmitter<Visit> = new EventEmitter();

  constructor() { }

  setEditModel(visit:Visit) {
    this.editVisitModel = visit;
    this.editVisitChangedEvent.emit(this.editVisitModel);
  }
  setNewModel(visit:Visit) {
    this.newVisitModel = visit;
    this.newVisitChangedEvent.emit(this.newVisitModel);
  }
  showEditForm() {
    this.showForm = true;
    this.showEditFormEvent.emit(this.showForm);
  }
  showNewForm() {
    this.showForm = false;
    this.showNewFormEvent.emit(this.showForm);
  }
  visitCreated(visit:Visit) {
    this.newVisitModel = visit;
    this.newVisitCreatedEvent.emit(this.newVisitModel);
  }
}
