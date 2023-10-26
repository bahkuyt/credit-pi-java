import { Component, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  @BlockUI('main-loader') blockUIList: NgBlockUI;
  public pListe:Product[]=[];
  constructor(
    private prodservice:ProductService,
    
   
    ){

  }

  ngOnInit(): void {
    this.pListe=[];
    this.getAllProducts();
    
  }

  getAllProducts(){
    this.blockUIList.start();
    this.prodservice.getAllProducts().subscribe((data:any)=>{
      this.pListe=data;
      //console.log(data);
      
      this.blockUIList.stop();
    },()=>{
      this.blockUIList.stop();
    })
  }

  onDelete(p:Product)
  {
    console.log("delete",p);
    
    this.prodservice.deleteProduct(p.id);
    const index: number = this.pListe.indexOf(p);
    if (index !== -1) {
        this.pListe.splice(index, 1);
    }        
  }

}
