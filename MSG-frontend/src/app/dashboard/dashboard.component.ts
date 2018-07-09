import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Visit } from '../model/visit';
import { Place } from '../model/place';
import { VisitService } from '../visit.service';
import { PlaceService } from '../place.service';
import { DatepickerService } from '../datepicker.service';
import { NewVisitService } from '../new-visit.service';
import { EditVisitService } from '../edit-visit.service';

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
    public newVisitService: NewVisitService,
    public editVisitService: EditVisitService,
    private visitService: VisitService,
    private placeService: PlaceService,
    private datepickerService: DatepickerService
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
  }
  setVisitForm(visit:Visit):void {
    this.newVisitService.show();
    this.newVisitService.set(visit);
  }
  showVisitForm():void {
    this.newVisitService.show();
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
    this.editVisitService.set(visit);
    this.editVisitService.show();
  }

  deleteVisit(visit: Visit):void {
    this.visitService.deleteVisit(visit).subscribe(
        result=>{
          this.visits.splice(this.visits.indexOf(result), this.currentPlace.id);
        },
        error => {
          console.log(error);
        },
        () => {
          this.disableDelete=false;
        }
     );
  }
}
