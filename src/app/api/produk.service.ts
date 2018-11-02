import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Produk } from '../model/produk';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProdukService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:3000/produks";



  getProduks(): Observable<Produk[]> {
    return this.http.get<Produk[]>(this.baseUrl)
      .pipe(
        tap(products => console.log('Fetch produks')),
        catchError(this.handleError('getProduks', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
