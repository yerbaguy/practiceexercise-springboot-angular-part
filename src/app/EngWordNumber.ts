export class EngWordNumber {

   // private _id:number;
    _engwordnumber:number;

    constructor(engWordNumber:number) {

        this._engwordnumber = engWordNumber;
    }




    // public EngWordNumber(id:number, engwordnumber:number) {

    //     this._id = id;

    //     this._engwordnumber = engwordnumber;
        
    // }

       set setengWordNumber( engWordNumber: number) {

         this._engwordnumber = engWordNumber;
       }

       get getengWordNumber() {

        return this._engwordnumber;
       }




}