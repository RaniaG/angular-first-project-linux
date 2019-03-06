import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProductsComponent } from './features/products/products.component';
import { AddProductComponent } from './features/products/add-product/add-product.component';
import { ProductDetailsComponent } from './features/products/product-details/product-details.component';
import { ProductResolver } from './features/products/product.resolver';
import { ProductListingResolver } from './features/products/productListing.resolver';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'products', loadChildren: './features/products/products.module#ProductsModule'
      },
      { path: '', component: HomeComponent },
      { path: '**', component: HomeComponent }
    ], { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
