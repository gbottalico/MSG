import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { BACKEND_URL } from './data/backend_url';
import { Visit } from './model/visit';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VisitService {
  private visitUrl = BACKEND_URL+'/api/visit';
  private visitsUrl = BACKEND_URL+'/api/visits';
  private visitsByPlaceAndNameUrl = BACKEND_URL+'/api/visit_by_place_and_name';
  private visitsByPlaceAndDateUrl = BACKEND_URL+'/api/visit_by_place_and_date';

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe
  ) { }

  getVisits(): Observable<Visit[]> {
    return this.http.get<Visit[]>(this.visitsUrl)
      .pipe(
        tap(visits => this.log(`fetched visits`)),
        catchError(this.handleError<Visit[]>('getVisits', []))
      );
  }

  getVisit(id: number): Observable<Visit> {
    const url = `${this.visitUrl}/${id}`;
    return this.http.get<Visit>(url)
      .pipe(
        tap(_ => this.log(`fetched visit id=${id}`)),
        catchError(this.handleError<Visit>(`getVisit id=${id}`))
      );
  }

  updateVisit (visit: Visit): Observable<any> {
    return this.http.put(this.visitUrl, visit, httpOptions)
      .pipe(
        tap(_ => this.log(`updated visit id=$=${visit.id}`)),
        catchError(this.handleError<any>('updateVisit'))
      );
  }

  addVisit (visit: Visit): Observable<any> {
    return this.http.post<Visit>(this.visitUrl, visit, httpOptions)
      .pipe(
        tap(_ => this.log(`added visit`)),
        catchError(this.handleError<Visit>(`addVisit`))
      );
  }

  deleteVisit (visit: Visit | number): Observable<Visit> {
    const id = typeof visit === 'number' ? visit : visit.id;
    const url = `${this.visitUrl}/${id}`;

    return this.http.delete<Visit>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted visit id=${id}`))
    );
  }

  getVisitsByDate(placeId:number, date: Date): Observable<Visit[]> {
    const dateStr = this.datePipe.transform(date, 'yyyy-MM-dd');
    return this.http.get<Visit[]>(`${this.visitsByPlaceAndDateUrl}?place_id=${placeId}&date=${dateStr}`)
      .pipe(
        tap(_ => this.log(`found visits matching "${date}" with place id "${placeId}"`)),
        catchError(this.handleError<Visit[]>('searchVisits', []))
      );
  }

  getVisitsByName(placeId:number, name: string): Observable<Visit[]> {
    if (!name.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Visit[]>(`${this.visitsByPlaceAndNameUrl}?place_id=${placeId}&name='${name}'`)
      .pipe(
        tap(_ => this.log(`found visits matching "${name}" with place id "${placeId}"`)),
        catchError(this.handleError<Visit[]>('searchVisits', []))
      );
  }

  private log(message:string): void {
    console.log('VisitService:' + message);
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
