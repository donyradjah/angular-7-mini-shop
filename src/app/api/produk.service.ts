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


  addProduk(produk): Observable<Produk> {
    return this.http.post<Produk>(this.baseUrl, produk, httpOptions).pipe(
      tap((produk: Produk) => console.log(`added produk w/ id=${produk._id}`)),
      catchError(this.handleError<Produk>('addProduk'))
    );
  }

  editProduk(produk_id, produk): Observable<Produk> {
    return this.http.put<Produk>(this.baseUrl + "/" + produk_id, produk, httpOptions).pipe(
      tap((produk: Produk) => console.log(`edit produk w/ id=${produk._id}`)),
      catchError(this.handleError<Produk>('editProduk'))
    );
  }


  detailProduk(produk_id): Observable<Produk> {
    return this.http.get<Produk>(this.baseUrl + "/" + produk_id).pipe(
      tap((produk: Produk) => console.log(`detail produk w/ id=${produk._id}`)),
      catchError(this.handleError<Produk>('detailProduk'))
    );
  }

  deleteProduk(produk_id): Observable<Produk> {
    return this.http.delete<Produk>(this.baseUrl + "/" + produk_id).pipe(
      tap((produk: Produk) => console.log(`detail produk w/ id=${produk._id}`)),
      catchError(this.handleError<Produk>('detailProduk'))
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
