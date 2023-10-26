import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import {  map } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  

  private readonly baseUrl: string = "http://localhost:8080/";

  constructor(private httpClient: HttpClient) { }

  public createOrUpdateCategory(cat: Category) {

    console.log("create or update", cat);

    return this.httpClient.put<any>(this.baseUrl + "Category/uc", cat, httpOptions).subscribe();

  }


  public getAllCategories() {

    return this.httpClient.get<Array<Category>>(this.baseUrl + "Category/")
      .pipe(map(res => {
        let categoryList = new Array<Category>();

        res.map((cat: Category) => {
          categoryList.push(new Category(cat.id, cat.name, cat.products));

        })


        return categoryList;
      }));
  }

  public deleteCategory(id: number) {


    return this.httpClient.delete(this.baseUrl + "Category/" + id).subscribe();
  }
}

export class CategoryDtoOut {
  constructor(
    public id: number,
    public name: string,

  ) { }
}
