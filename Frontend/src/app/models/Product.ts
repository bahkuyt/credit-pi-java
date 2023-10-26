export interface IProduct {

    id : number;
    name : string;
    description : string;
    Release: Date ;
    categories:any;
    //images:string[];
    //logo:string;
 }
 
 export class Product implements IProduct {
   constructor(
     public id : number,
     public name : string,
     public description : string,
     public Release: Date,
     public categories:any,
     //public logo:string,
    // public images:string[]
   ) { }
 
 
 
 }
 