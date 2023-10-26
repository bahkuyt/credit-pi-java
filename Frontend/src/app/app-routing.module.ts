import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GamesComponent } from './games/games.component';
import { SettingsComponent } from './settings/settings.component';
import { CategoryComponent } from './Category/category/category.component';
import { ProductsComponent } from './products/products/products.component';
import { AddProductComponent } from './products/products/add-product/add-product.component';


const routes: Routes = [
 
  { path: 'dashboard', component: DashboardComponent  },
  { path: 'gmaes', component: GamesComponent  },
  { path: 'Categories/list', component: CategoryComponent},
  { path: 'Products', component: ProductsComponent},
  { path: 'Products/Create', component: AddProductComponent},
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
