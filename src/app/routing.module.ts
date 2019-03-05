import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProductsComponent } from './features/products/products.component';
import { AddProductComponent } from './features/products/add-product/add-product.component';
import { ProductDetailsComponent } from './features/products/product-details/product-details.component';
import { ProductResolver } from './features/products/product.resolver';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: 'products', children:[
        {path:'', component:ProductsComponent},
        {path: 'add', component:AddProductComponent},
        {path: 'edit/:id',component:AddProductComponent},
        {path: 'details/:id',component: ProductDetailsComponent,resolve:{myProductResolver:ProductResolver}}
      ]},
      {path: '', component : HomeComponent},
      {path: '**', component : HomeComponent}
    ]),
  ],
  exports:[
    RouterModule
  ]
})
export class RoutingModule { }
