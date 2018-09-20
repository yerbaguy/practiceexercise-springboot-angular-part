import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { RandPl } from './rand_pl';
import { Observable } from 'rxjs';

import { HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { eng_word_number } from './eng_word_number';

import { IEngWordNumber } from './IEngWordNumber';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _url: string = "http://localhost:8080/url/getrandplword";

  public _url_: string ="http://localhost:8080/api/gettengwordnumber";

   headers = new HttpHeaders().set('Content-Type','application/json');
   //options = new RequestOptions{(headers:this.headers)};

  


  constructor(private http: HttpClient) { }

 // getRandPlWord(): Observable<IRand_PL[]> {
  getRandPlWord(): Observable<any> {


    return this.http.get(this._url);

  //  return this.http.get(this._url)
  //             .
  //             .catch(this.handleError);

  }

  private extractData(res: Response) {

    let body  = res.json();
    return body;
  }

  private handleError(error: Response|any) {

    console.error(error.message || error);

    return Observable.throw(error.status);
  }


  gettEngWordNumber(): Observable<eng_word_number[]> {

    return this.http.get<eng_word_number[]>(this._url_);

  }

  gettttEngWordNumber(): Observable<IEngWordNumber[]> {

     return this.http.get<IEngWordNumber[]>(this._url_);
  }

}
