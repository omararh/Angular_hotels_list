import { Injectable } from '@angular/core';
import { Ihotel } from './Ihotel';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs-compat/Observable';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';



@Injectable({
  providedIn : 'root'
})

export class HotelListService {

  private readonly HOTEL_API_URL = 'api/hotels.json';

  constructor( private http : HttpClient){}

  public getHotels() : Observable<Ihotel[]> {
    return this.http.get<Ihotel[]>(this.HOTEL_API_URL).pipe(
      tap(hotels => console.log(hotels,'hotels' )),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return  throwError(() => new Error('Something bad happened; please try again later.'));
  }


}
