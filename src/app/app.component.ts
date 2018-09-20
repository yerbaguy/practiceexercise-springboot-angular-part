import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';

import { Http } from '@angular/http';


//import { IRand_PL } from './rand_pl';

import { RandPl } from './rand_pl';


import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


import { AppService } from './app.service'; 

import { eng_word_number } from './eng_word_number';

//import { EngWordNumber } from './EngWordNumber';

//import 'jxjs/Rx';

import { map } from 'rxjs/operators';





const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  en$: Object;

  message: any;

  public engwordnumbers = [];
 

 //randplword: RandPl[];

 private ra: Array<object> = [];

 public engwordnumber = [];

 public engwnn = [];



randplword: Observable<RandPl[]>

engwordnumb: Observable<eng_word_number[]>

randPlWord:number;


 statusCode:number;


 idplword:number;
 getidplword:number;
 name:string = '';
 plword:string = '';
 found:boolean;
 engword:string = '';
 getwordnumber:number;
 compare:boolean;
 wordnumber:number;
 wordsnumber:number;
 //randplword:number = 1;
 getrandplword:number = 1;
//  getengwordnumber:number = 1;
//  getEngwordnumber:number = 1;
 engWordNumber:number;
 enggWordNumber:number;
 //engwordnumber: number;

 //engwn:EngWordNumber;
 //engwnn:number; //here

 //response:any;
 data:any;
 engwordnumberdata:any;

 randpl:number;
 p:number;

 a:number;
 e:any;


//  public randplwords = [];

  

 pl:string = 'lkjasd';
 
 
  title = 'Words6SpringBoot-Client';

//   constructor( private httpClient:HttpClient, public _appService: AppService, public engwordNumber: EngWordNumber) {

    constructor( private httpClient:HttpClient, public _appService: AppService) {


    // let engword = new EngWordNumber(this.engWordNumber);

   }

  //constructor( private httpClient:HttpClient) {}



  // ngOnInit() {

  //   this._appService.getRandPlWord()
  //       .subscribe(data => this.randplwords = data);


  // }


  ngOnInit() {

  //   let obs =  this.httpClient.get('http://localhost:8080/api/getrandplword' + this.randPlWord);

  //  // obs.subscribe(() => console.log('Got the response'));
  //  // obs.subscribe((response) => console.log(response));

  //  obs.subscribe((response) => {

  //    // this.randpl = response.randPlWord;
  //   //  this.p = this.randpl;

  //    // console.log('Got the response'));
  //   //  console.log(this.randpl);

  //      // console.log(response);

  //      this.response = response;
       
  //       console.log(response);


  //  }) 


//     this.getRa();

  //this.engwn = new EngWordNumber(this.engWordNumber);

  }



  get eengWordNumber(): number {
      return this.engWordNumber;
  }

  set eengWordNumber(engWordNumber: number) {
      this.engWordNumber = engWordNumber;
  }

  onNameKeyUp(event:any) {

    

    //console.log(event.target.value);

    this.name = event.target.value;


    console.log(this.name);

    this.found = false;
    this.compare = false;

  }

  getWord() {

   // console.log(this.name);

   this.httpClient.get('http://localhost:8080/api/word')
   .subscribe(
      
    (data:any[]) => {

     // console.log(data);

     if (data.length) {

     this.plword = data[0].plword;

     this.pl = this.plword;

     console.log(this.plword);

     this.found = true;

     }

    }

   )

  }


  onTypedEngWordKeyUp(event:any) {
 // onTypedEngWordKeyUp(engword) { 

    

    //console.log(event.target.value);

    this.engword = event.target.value;

  // this.engword = event.value;

   // this.engword = engword.value;

    console.log(this.engword);

   // this.found = false;

  // this.engword = '';

  }


  typedEngWord() {


    //  const headers = new Headers();
    //  headers.append('Content-Type', 'application/json; charset=utf-8');

    console.log('posteng');

    this.httpClient.post('http://localhost:8080/api/posteng', JSON.stringify(this.engword), httpOptions )
        .subscribe(
          
          () => {},
          err => console.error(err)

        ) 
    
    

     console.log(this.engword);

    //  this.getCompareGetRandPlAndGetWordNumber();
//    this.getWordNumber(); // here
//    this.getRandPlWord();

//    this.getRandPlWords();

//    this.getIdPlWord(); // here


    this.getEngWordNumber();
   // console.log('enggwordnumber' + this.enggWordNumber);


    this.gettttEngWordNumber();
    console.log('gettttEngWordNumber' + this.gettttEngWordNumber);

  }

getCompareGetRandPlAndGetWordNumber() {


  this.httpClient.get('http://localhost:8080/api/compareGetRandPlAndGetWordNumber(getwordnumber)')
   .subscribe(
      
    (data:any[]) => {

     // console.log(data);

     if (data.length) {

   //  this.plword = data[0].plword;
     this.compare = data[0].compare;

  //   this.pl = this.plword;

  //   console.log(this.plword);
     console.log(this.compare);

  //   this.found = true;

     }

    }

   )



}



getWordNumber() {

   console.log('getwordsnumber');

 // this.httpClient.get('http://localhost:8080/api/getwordsNumber')
  this.httpClient.get('http://localhost:8080/api/getwordsnumber')
  .subscribe(
     
   (data:any[]) => {

    // console.log(data);

    if (data.length) {

  //  this.plword = data[0].plword;
   // this.compare = data[0].compare;

   this.wordnumber = data[0].wordnumber;
   this.wordsnumber = this.wordnumber;

 //   this.pl = this.plword;

 //   console.log(this.plword);
  //  console.log(this.compare);
      console.log('getwordsnumber' + this.wordsnumber);

 //   this.found = true;

    }

   }

  )



}



getIdPlWord() {


  

  let obs =  this.httpClient.get('http://localhost:8080/api/idplword');

  //  // obs.subscribe(() => console.log('Got the response'));
  //  // obs.subscribe((response) => console.log(response));

    obs.subscribe((response) => {


      this.wordnumber = response[0].wordnumber;


  //    // this.randpl = response.randPlWord;
  //   //  this.p = this.randpl;

  //    // console.log('Got the response'));
  //   //  console.log(this.randpl);

  //      // console.log(response);

  //      this.response = response;
       
         console.log(response);
         console.log('getidplword' + this.wordnumber);


    }) 



}


getRandPlWord() {

    this.randplword = this._appService.getRandPlWord();

    console.log(this.randplword);
}



getRandPlWords() {
 
  console.log('getrandplwords')

  this._appService.getRandPlWord()
      .subscribe(

        data => this.randplword = data,
        errorCode => this.statusCode = errorCode);
        
        console.log('getrandplwords' + this.randplword);
      

}


getEngWordNumber() {


  let obs =  this.httpClient.get('http://localhost:8080/api/gettengwordnumber');

  //  // obs.subscribe(() => console.log('Got the response'));
  //  // obs.subscribe((response) => console.log(response));

    obs.subscribe((response) => {


      // this.getengwordnumber = response[0].getengwordnumber;
      // this.getEngwordnumber = this.getengwordnumber;

      this.engWordNumber = response[0].engWordNumber;
      console.log('engwordnumber' + this.engWordNumber);
   
      
     // this.engwn.engWordNumber = this.enggWordNumber;



    //  this.engwn.setengWordNumber = this.engWordNumber;

    //   this.engwnn = this.engwn.getengWordNumber;




     // console.log('engwnn' + this.engwnn);


      if (this.engWordNumber > 0) {

        console.log("Good");
      } else {

        console.log("Bad");
      }

  //    // this.randpl = response.randPlWord;
  //   //  this.p = this.randpl;

  //    // console.log('Got the response'));
  //   //  console.log(this.randpl);

  //      // console.log(response);

  //      this.response = response;
       
        //  console.log(response);
        // console.log('getengwordnumber' + this.getengwordnumber);
  //       console.log('getengwordnumber' + this.getEngwordnumber);


    }) 







}


gettEngWordNumber() {

  
    return this._appService.gettEngWordNumber()
      .subscribe( data => this.engwordnumber = data);





}


gettttEngWordNumber() {

  this.httpClient.get('http://localhost:8080/api/gettengwordnumber')
  .subscribe(
     
   (data:any[]) => {

    // console.log(data);

    if (data.length) {

    this.engWordNumber = data[0].engWordNumber;

   // this.pl = this.plword;
    this.e = this.engWordNumber;

   // console.log(this.plword);
    console.log('gettttEngWordNumber' + this.e);

   // this.found = true;

    if (this.engWordNumber > 0) {

    console.log("Good");
    } else {

    console.log("Bad");
    }

    }

   }

  )


}



// public getRa() {


//    console.log("ra");
  
//    this._appService.getRandPlWord().subscribe((data: Array<object>) => {

//     this.ra = data;
//     console.log('ra' + data);

//    })
// }


}
