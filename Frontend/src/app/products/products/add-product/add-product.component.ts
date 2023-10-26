import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  catListe:Category[]=[];
  
  temCat:Category;
  addProductForm: FormGroup;
  constructor(
    private prodservice: ProductService,
    private router:Router,
    private catService:CategoryService,
    private _formBuilder: FormBuilder,

  ) {

  }

  getAllCats(){
    
    this.catService.getAllCategories().subscribe((data:any)=>{
      this.catListe=data;
 
    },()=>{
      
    })
  }
  ngOnInit(): void {
    this.getAllCats();
    this.addProductForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description:'',
      Release:[Date.now()],
      Category:''
    });
    
    this.temCat=null;
  }


  addProduct(){
    if (this.addProductForm.valid)
    {
      
      var name:string=this.addProductForm.controls["name"].value;
      var description:string=this.addProductForm.controls["description"].value;
      var Release:Date=this.addProductForm.controls["Release"].value;
      
      var tempcatList:Category[]=[];
      tempcatList.push(this.temCat);
      var tempp=new Product(0,name,description,Release,tempcatList);
      this.prodservice.createOrUpdateProduct(tempp);  
      this.addProductForm.reset();
      this.router.navigate(["/Products"])
;
      
    }
    return
  }


  Cancel(){
    this.router.navigate(["/Products"])
  }


  assignCorporationToManage(selectedValue) {
    console.log(selectedValue)
    this.temCat=selectedValue;
}

}
