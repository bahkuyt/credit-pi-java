import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { UpdateCategoryComponent } from '../update-category/update-category.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{

  @BlockUI('main-loader') blockUIList: NgBlockUI;
  public catListe:Category[]=[];
  public addstatus:boolean;
  addCategoryForm: FormGroup;
  constructor(
    private catService:CategoryService,
    private dialogref:MatDialog,
    private _formBuilder: FormBuilder,
    ){

  }

  ngOnInit(): void {
    this.catListe=[];
    this.getAllCats();
    this.addstatus=false;
    this.addCategoryForm=this._formBuilder.group({
      name:['',[Validators.required,Validators.minLength(3)]]
    })
  }


  getAllCats(){
    this.blockUIList.start();
    this.catService.getAllCategories().subscribe((data:any)=>{
      this.catListe=data;
      //console.log(data);
      
      this.blockUIList.stop();
    },()=>{
      this.blockUIList.stop();
    })
  }

  openDialog(catu:Category)
  {
    this.dialogref.open(UpdateCategoryComponent,{
      data:{
        cat:catu
      }
    })
  }

  onDelete(cat:Category)
  {
    console.log("delete",cat);
    
    this.catService.deleteCategory(cat.id);
    const index: number = this.catListe.indexOf(cat);
    if (index !== -1) {
        this.catListe.splice(index, 1);
    }        
  }

  addCategory(){
    if (this.addCategoryForm.valid)
    {
      
      var name:string=this.addCategoryForm.controls["name"].value;
      
      
      var tempcat=new Category(0,name,null);
      this.catService.createOrUpdateCategory(tempcat);
      
      this.addCategoryForm.reset();
      //location.reload();
      this.addstatus=false;
      this.catListe.push(tempcat);
      
    }
    return
  }
  
  createTrue(){
    this.addstatus=true
  }

  Cancel(){
    this.addstatus=false
  }

}
