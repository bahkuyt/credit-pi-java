import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit{

  @BlockUI('main-loader') blockUIList: NgBlockUI;
  addCategoryForm: FormGroup;
  category:Category;
  constructor(
    private _formBuilder: FormBuilder,
    private categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public data,
    private router: Router
  ){}
  ngOnInit(): void {
 
    
    this.category=this.data.cat;
    this.addCategoryForm=this._formBuilder.group({
      name:['',[Validators.required,Validators.minLength(3)]]
    })
  }

  validate(){
    if (this.addCategoryForm.valid)
    {
      
      var name:string=this.addCategoryForm.controls["name"].value;
      this.blockUIList.start();
      
      var tempcat=new Category(this.category.id,name,this.category.products);
      this.categoryService.createOrUpdateCategory(tempcat);
      this.blockUIList.stop();
      this.addCategoryForm.reset();
      
      location.reload();
      
    }
    return
  }


  


}
