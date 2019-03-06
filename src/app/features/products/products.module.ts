import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { ProductsListingComponent } from './products-listing/products-listing.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RoutingModule } from 'src/app/routing.module';
import { ProductResolver } from './product.resolver';
import { ProductListingResolver } from './productListing.resolver';
import { RouterModule } from '@angular/router';



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
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '', children: [
          { path: '', component: ProductsComponent, resolve: { myProductListingResolver: ProductListingResolver } },
          { path: 'add', component: AddProductComponent },
          { path: 'edit/:id', component: AddProductComponent },
          { path: 'details/:id', component: ProductDetailsComponent, resolve: { myProductResolver: ProductResolver } }
        ], 
      },
    ]),
  ],
  providers: [
    ProductResolver,
    ProductListingResolver
  ],
})
export class ProductsModule { }
