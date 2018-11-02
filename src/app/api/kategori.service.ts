import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Kategori } from '../model/kategori';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class KategoriService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:3000/kategoris";



  getKategoris(): Observable<Kategori[]> {
    return this.http.get<Kategori[]>(this.baseUrl)
      .pipe(
        tap(kategoris => console.log('Fetch kategoris')),
        catchError(this.handleError('getKategoris', []))
      );
  }


  addKategori(kategori): Observable<Kategori> {
    return this.http.post<Kategori>(this.baseUrl, kategori, httpOptions).pipe(
      tap((kategori: Kategori) => console.log(`added kategori w/ id=${kategori._id}`)),
      catchError(this.handleError<Kategori>('addKategori'))
    );
  }

  editKategori(kategori_id, kategori): Observable<Kategori> {
    return this.http.put<Kategori>(this.baseUrl + "/" + kategori_id, kategori, httpOptions).pipe(
      tap((kategori: Kategori) => console.log(`edit kategori w/ id=${kategori._id}`)),
      catchError(this.handleError<Kategori>('editKategori'))
    );
  }


  detailKategori(kategori_id): Observable<Kategori> {
    return this.http.get<Kategori>(this.baseUrl + "/" + kategori_id).pipe(
      tap((kategori: Kategori) => console.log(`detail kategori w/ id=${kategori._id}`)),
      catchError(this.handleError<Kategori>('detailKategori'))
    );
  }

  deleteKategori(kategori_id): Observable<Kategori> {
    return this.http.delete<Kategori>(this.baseUrl + "/" + kategori_id).pipe(
      tap((kategori: Kategori) => console.log(`detail kategori w/ id=${kategori._id}`)),
      catchError(this.handleError<Kategori>('detailKategori'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error({ data: error }); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
