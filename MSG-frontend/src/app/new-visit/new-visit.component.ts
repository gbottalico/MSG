import { Component, Injectable, OnInit } from '@angular/core';
import { NgbDatepickerI18n, NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

import { I18n, CustomDatepickerI18n } from '../data/datepicker_IT';
import { NewVisitService } from '../new-visit.service';
import { VisitService } from '../visit.service';
import { PlaceService } from '../place.service';
import { Visit } from '../model/visit';

const now = new Date();

@Component({
  selector: 'app-new-visit',
  templateUrl: './new-visit.component.html',
  styleUrls: ['./new-visit.component.css'],
  providers: [I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}]
})
export class NewVisitComponent implements OnInit {
  show:boolean = false;
  showLeavingDate:boolean = false;
  entranceDate:NgbDateStruct;
  leavingDate:NgbDateStruct;
  documentTypes = ["Patente","Carta D'Itentità"];
  documentLabel = 'Tipo Documento';

  visit:Visit = new Visit();

  constructor(
    private newVisitService: NewVisitService,
    private visitService: VisitService,
    private placeService: PlaceService,
    private formatter: NgbDateParserFormatter
  ) { }

  ngOnInit() {
    this.resetDates();
    this.newVisitService.changeForm.subscribe(show => {
      this.show = show;
    });
    this.newVisitService.changeVisit.subscribe(visit => {
      this.visit = Object.assign({}, visit);
      this.visit.id = 0;
      this.resetDates();
      if(visit.guestDocumentType!='' && visit.guestDocumentType!=null){
        this.documentLabel = visit.guestDocumentType;
      }
    });
  }

  setDocumentType(d:string):void {
    this.visit.guestDocumentType = d;
    this.documentLabel = d;
  }
  closeForm():void {
    this.show = false;
  }
  reset():void {
    this.documentLabel='Tipo Documento';
    this.visit = new Visit();
    this.resetDates();
  }
  resetDates():void {
    this.leavingDate = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
    this.entranceDate = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }
  toggleLeavingDate():void {
    this.showLeavingDate = !this.showLeavingDate;
  }
  assignLeavinDate():void{
    this.visit.leavingDate = this.formatter.format(this.leavingDate);
  }
  assignEntranceDate():void{
    this.visit.entranceDate = this.formatter.format(this.entranceDate);
  }
  addVisit():void {
    this.visitService.addVisit(this.visit).subscribe();
  }
}
