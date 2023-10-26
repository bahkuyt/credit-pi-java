import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GamesComponent } from './games/games.component';
import { SettingsComponent } from './settings/settings.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { HeaderComponent } from './header/header.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { BlockUiTemplateComponent } from './sharedModule/block-ui-template/block-ui-template.component';
import { BlockUIModule } from 'ng-block-ui';
import { CategoryComponent } from './Category/category/category.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateCategoryComponent } from './Category/update-category/update-category.component';
import { ProductsComponent } from './products/products/products.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { AddProductComponent } from './products/products/add-product/add-product.component';
@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    GamesComponent,
    SettingsComponent,
    SublevelMenuComponent,
    HeaderComponent,
    BlockUiTemplateComponent,
    CategoryComponent,
    UpdateCategoryComponent,
    ProductsComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OverlayModule,
    CdkMenuModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    BlockUIModule.forRoot({
      template: BlockUiTemplateComponent
    }),
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
