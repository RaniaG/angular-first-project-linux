import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';

import { HeaderComponent } from './core/header/header.component';
import { NavbarComponent } from './core/header/navbar/navbar.component';
import { ShoppingCartComponent } from './core/header/shopping-cart/shopping-cart.component';

import { ProductService } from './_services/product.service';
import { SessionService } from './_services/session.service';
import { CartService } from './_services/cart.service';

import { CategoryService } from './_services/category.service';
import { TagService } from './_services/tag.service';
import { PaymentService } from './_services/payment.service';
import { LanguageService } from './_services/language.service';
import { HomeComponent } from './features/home/home.component';
import { ProductsModule } from './features/products/products.module';
import { SharedModule } from './shared/shared.module';
import { RoutingModule } from './routing.module';
import { ProductResolver } from './features/products/product.resolver';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ShoppingCartComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    SharedModule,
    RoutingModule
  ],
  providers: [ProductService,SessionService,CartService,CategoryService,TagService,PaymentService,LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
