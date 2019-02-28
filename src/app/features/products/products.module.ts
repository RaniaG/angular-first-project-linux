import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsComponent} from './products.component';
import {ProductComponent} from './product/product.component';
import {ProductsListingComponent} from './products-listing/products-listing.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {AddProductComponent} from './add-product/add-product.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListingComponent,
    ProductComponent,
    ProductDetailsComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: 'products', children:[
        {path:'', component:ProductsComponent},
        {path: 'add', component:AddProductComponent},
        {path: 'edit/:id',component:AddProductComponent},
        {path: 'details/:id',component: ProductDetailsComponent}
      ]}
    ]),
    ReactiveFormsModule,
    FormsModule
  ],
  

})
export class ProductsModule { }
