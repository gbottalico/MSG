import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

import { Place } from './model/place';
import { BE_URL } from './data/be_url';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private placeUrl = BE_URL+'/api/place';
  private placesUrl = BE_URL+'/api/places';
  private currentPlace:Place;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }
  setCurrentPlace(place: Place):void {
    this.cookieService.set( 'msg.currentPlace', ""+place.id);
    this.currentPlace = place;
  }
  getStoredCurrentPlace():Observable<Place> {
    return this.getPlace(+this.cookieService.get('msg.currentPlace'));
  }
  getCurrentPlace():Place {
    return this.currentPlace;
  }
  getPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(this.placesUrl)
      .pipe(
        tap(places => this.log(`fetched places`)),
        catchError(this.handleError<Place[]>('getPlaces', []))
      );
  }

  getPlace(id: number): Observable<Place> {
    const url = `${this.placeUrl}/${id}`;
    return this.http.get<Place>(url)
      .pipe(
        tap(_ => this.log(`fetched place id=${id}`)),
        catchError(this.handleError<Place>(`getPlace id=${id}`))
      );
  }

  updatePlace(place: Place): Observable<any> {
    return this.http.put(this.placeUrl, place, httpOptions)
      .pipe(
        tap(_ => this.log(`updated place id=$=${place.id}`)),
        catchError(this.handleError<any>('updatePlace'))
      );
  }

  addPlace(place: Place): Observable<Place> {
    return this.http.post<Place>(this.placeUrl, place, httpOptions)
      .pipe(
        tap((place: Place) => this.log(`added place w/ id=${place.id}`)),
        catchError(this.handleError<Place>(`addPlace`))
      );
  }

  deletePlace(place: Place | number): Observable<Place> {
    const id = typeof place === 'number' ? place : place.id;
    const url = `${this.placeUrl}/${id}`;

    return this.http.delete<Place>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted place id=${id}`)),
      catchError(this.handleError<Place>('deletePlace'))
    );
  }

  private log(message:string): void {
    console.log('PlaceService:' + message);
  }

  handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
