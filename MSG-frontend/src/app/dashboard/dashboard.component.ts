import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Visit } from '../model/visit';
import { Place } from '../model/place';
import { VisitService } from '../visit.service';
import { PlaceService } from '../place.service';
import { DatepickerService } from '../datepicker.service';
import { VisitEventService } from '../visit-event.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  disableDelete:boolean;
  places: Place[] = []
  currentPlace: Place;
  placeLabel:string;
  allVisits: Visit[] = [];
  visits: Visit[] = [];
  date: Date = new Date();

  constructor(
    public visitEventService: VisitEventService,
    private visitService: VisitService,
    private placeService: PlaceService,
    private datepickerService: DatepickerService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.disableDelete=false;
    this.placeLabel="Selezionare Luogo";
    this.getAllPlaces();
    this.placeService.getStoredCurrentPlace().subscribe(place=>{
      this.setCurrentPlace(place);
    });

    this.datepickerService.change.subscribe(date => {
      this.date = date;
      this.getVisitsFromDate()
    });

    this.visitEventService.newVisitCreatedEvent.subscribe(visit=>{
      if(visit.entranceDate === this.datePipe.transform(this.date, 'dd-MM-yyyy')){
        this.visits.push(visit);
      }
    });
  }
  setVisitForm(visit:Visit):void {
    this.visitEventService.showNewForm();
    this.visitEventService.setNewModel(visit);
  }
  showVisitForm():void {
    this.visitEventService.showNewForm();
  }
  search(term: string):void {
    this.visits = this.allVisits
      .filter(visit =>
        visit.hostName.toLowerCase().search(term.toLowerCase())!=-1 ||
        visit.guestName.toLowerCase().search(term.toLowerCase())!=-1
      );
  }
  getVisitsFromDate():void {
    if(this.date==null){
      this.date = new Date();
    }
    if(this.currentPlace!=null){
      this.visitService.getVisitsByDate(this.currentPlace.id,this.date)
        .subscribe( visits => {
          this.visits = this.allVisits = visits;
        });
    }
  }
  setCurrentPlace(place: Place){
    this.currentPlace = place;
    this.placeLabel = place.name;
    this.getVisitsFromDate();
    this.placeService.setCurrentPlace(this.currentPlace);
  }
  getAllPlaces():void {
    this.placeService.getPlaces().subscribe( places => this.places = places);
  }
  editVisit(visit: Visit):void {
    this.visitEventService.setEditModel(visit);
    this.visitEventService.showEditForm();
  }

  deleteVisit(visit: Visit):void {
    this.visitService.deleteVisit(visit).subscribe(
        result=>{
          this.visits.splice(this.visits.indexOf(visit), this.currentPlace.id);
        },
        error => {
          this.visits.splice(this.visits.indexOf(visit), this.currentPlace.id);
          console.log(error);
        },
        () => {
          this.disableDelete=false;
        }
     );
  }
  refresh():void{
    this.getVisitsFromDate();
  }
}
