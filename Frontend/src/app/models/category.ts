import { Product } from "./Product";

export interface ICategory {

   id : number;
   name : string;
   products:Product[];
}
export class Category implements ICategory {
  constructor(
   public id : number,
   public name : string,
   public products:Product[]
  ) { }



}
