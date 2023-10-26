import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly baseUrl: string = "http://localhost:8080/Product/";

  constructor(private httpClient: HttpClient) { }



  public getAllProducts() {

    return this.httpClient.get<Array<Product>>(this.baseUrl )
      .pipe(map(res => {
        let productList = new Array<Product>();

        res.map((p: Product) => {
          productList.push(new Product(p.id,p.name,p.description,p.Release,p.categories));

        })


        return productList;
      }));
  }

  public getProduct(id:number) {

    return this.httpClient.get<Product>(this.baseUrl +id).subscribe();
      
  }

  public createOrUpdateProduct(p: Product) {

    console.log("create or update", p);

    return this.httpClient.put<any>(this.baseUrl , p).subscribe();

  }

  public deleteProduct(id: number) {


    return this.httpClient.delete(this.baseUrl + id).subscribe();
  }


  public productByCategory(id:number) {

    return this.httpClient.get<Array<Product>>(this.baseUrl+"filter"+id )
      .pipe(map(res => {
        let productList = new Array<Product>();

        res.map((p: Product) => {
          productList.push(new Product(p.id,p.name,p.description,p.Release,p.categories));

        })


        return productList;
      }));
  }
}
