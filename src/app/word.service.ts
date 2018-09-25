import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Word } from './Word';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {

  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor( private http: HttpClient) { }

  private wordUrl = "http://localhost:8080/api/create";


  private handleError<T> (operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {

       console.error(error, 'Operation: ${operation}');

       return of(result as T);
    }

  }


  addWord(word: Word): Observable<Word> {

    return this.http.post<Word>(this.wordUrl, word, httpOptions).pipe(
      tap((word: Word) => console.log('Added word with id ${word.id}')),
      catchError(this.handleError<Word>('_addWord_'))
    );


  }

}
