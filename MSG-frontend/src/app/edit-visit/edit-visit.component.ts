import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { NgbDatepickerI18n, NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateITParserFormatter } from "../data/ngb-date-it-parser-formatter"

import { I18n, CustomDatepickerI18n } from '../data/datepicker_IT';
import { VisitEventService } from '../visit-event.service';
import { VisitService } from '../visit.service';
import { PlaceService } from '../place.service';
import { Visit } from '../model/visit';
import { DOCUMENT_TYPES } from '../data/document_types';

const now = new Date();

@Component({
  selector: 'app-edit-visit',
  templateUrl: './edit-visit.component.html',
  styleUrls: ['./edit-visit.component.css'],
  providers: [
              I18n,
              { provide: NgbDateParserFormatter, useClass: NgbDateITParserFormatter },
              { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }
            ]
})
export class EditVisitComponent implements OnInit {
  public isEntranceTimeAssigned:boolean;
  public isHostNameAssigned:boolean;
  public isGuestNameAssigned:boolean;
  public isBadgeAssigned:boolean;
  public isEntranceDateAssigned:boolean;
  public isLeavingTimeAssigned:boolean;

  public mr: NgbModalRef;
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
    this.visitEventService.showEditFormEvent.subscribe(show => {
      this.open(this.content);
    });

    this.visitEventService.editVisitChangedEvent.subscribe(visit => {
      this.visit = visit;
      this.showLeavingDate=false;
      if(visit.guestDocumentType!='' && visit.guestDocumentType!=null){
        this.documentLabel = visit.guestDocumentType;
      }
    });
  }
  public open(content) {
    this.isBadgeAssigned = this.visit.badgeNo!=null;
    this.isEntranceDateAssigned=this.visit.entranceDate!=null;
    this.isLeavingTimeAssigned=this.visit.leavingTime!=null;
    this.isEntranceTimeAssigned=this.visit.entranceTime!=null;
    this.isHostNameAssigned=this.visit.hostName!=null;
    this.isGuestNameAssigned=this.visit.guestName!=null;

    this.mr = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
  public close(){
    this.mr.close();
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
  public editVisit():void {
    this.visit.place = this.placeService.getCurrentPlace();
    this.visit.entranceDate = this.formatter.format(this.entranceDate);
    this.visit.leavingDate = this.formatter.format(this.leavingDate);
    this.visitService.updateVisit(this.visit).subscribe();
  }
}
