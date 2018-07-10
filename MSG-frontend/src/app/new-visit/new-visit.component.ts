import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { NgbDatepickerI18n, NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgbDateITParserFormatter } from "../data/ngb-date-it-parser-formatter"

import { I18n, CustomDatepickerI18n } from '../data/datepicker_IT';
import { VisitEventService } from '../visit-event.service';
import { VisitService } from '../visit.service';
import { PlaceService } from '../place.service';
import { Visit } from '../model/visit';
import { DOCUMENT_TYPES } from '../data/document_types';
const now = new Date();

@Component({
  selector: 'app-new-visit',
  templateUrl: './new-visit.component.html',
  styleUrls: ['./new-visit.component.css'],
  providers: [
              I18n,
              { provide: NgbDateParserFormatter, useClass: NgbDateITParserFormatter },
              { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }
            ]
})
export class NewVisitComponent implements OnInit {
  private showLeavingDate:boolean = false;
  private entranceDate:NgbDateStruct;
  private leavingDate:NgbDateStruct;
  private documentTypes = DOCUMENT_TYPES;
  private documentLabel = 'Tipo Documento';
  private visit:Visit;
  private closeResult: string;


  @ViewChild('content') private content;

  constructor(
    private visitEventService: VisitEventService,
    private visitService: VisitService,
    private placeService: PlaceService,
    private formatter: NgbDateParserFormatter,
    private modalService: NgbModal
  ) { }

  public ngOnInit() {
    this.visit = new Visit();
    this.resetDates();

    this.visitEventService.showNewFormEvent.subscribe(show => {
      this.resetVisit();
      this.openEdit(this.content);
    });

    this.visitEventService.newVisitChangedEvent.subscribe(visit => {
      this.visit.guestName = visit.guestName;
      this.visit.hostName = visit.hostName;
      this.visit.guestDocumentType = visit.guestDocumentType;
      this.visit.guestDocumentNo = visit.guestDocumentNo;
      this.visit.socialReason = visit.socialReason;
      this.showLeavingDate=false;
      if(visit.guestDocumentType!='' && visit.guestDocumentType!=null){
        this.documentLabel = visit.guestDocumentType;
      }
    });
  }
  public open(content) {
    this.reset()
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
      .result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }
  public openEdit(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  public resetVisit():void {
    this.visit.id = 0;
    this.visit.badgeNo = null;
    this.visit.entranceTime = null;
    this.visit.leavingTime = null;
    this.assignLeavinDate();
    this.assignEntranceDate();
  }
  public setDocumentType(d:string):void {
    this.visit.guestDocumentType = d;
    this.documentLabel = d;
  }
  public reset():void {
    this.documentLabel='Tipo Documento';
    this.visit = new Visit();
    this.resetDates();
  }
  public resetDates():void {
    this.leavingDate = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
    this.entranceDate = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
    this.assignLeavinDate();
    this.assignEntranceDate();
  }
  public toggleLeavingDate():void {
    this.showLeavingDate = !this.showLeavingDate;
    this.assignLeavinDate();
  }
  public assignLeavinDate():void{
    this.visit.leavingDate = this.formatter.format(this.leavingDate);
  }
  public assignEntranceDate():void{
    this.visit.entranceDate = this.formatter.format(this.entranceDate);
  }
  public addVisit():void {
    this.visit.place = this.placeService.getCurrentPlace();
    this.visit.entranceDate = this.formatter.format(this.entranceDate);
    this.visit.leavingDate = this.formatter.format(this.leavingDate);
    this.visitService.addVisit(this.visit).subscribe();
    this.visitEventService.visitCreated(this.visit);
  }
}
