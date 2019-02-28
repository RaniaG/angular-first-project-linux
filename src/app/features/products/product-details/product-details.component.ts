import { Component, OnInit } from '@angular/core';
import { TabsComponent } from 'src/app/shared/tabs/tabs.component';
import { Product } from 'src/app/_model/product';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
   product:Product;
   isSelected:number;
   nItems:number;
  constructor(private cartService:CartService) { 
    this.product={
      data:[{name:"Blue Ladies Handbag",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus nibh sed elimttis adipiscing. Fusce in hendrerit purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus nibh sed elimttis adipiscing. Fusce in hendrerit purus."}], price: 22, 
      tags:[], images:['assets/img/products/product-grey-7.jpg',
      'assets/img/products/product-grey-7.jpg',
    'assets/img/products/product-grey-7.jpg']
    }
    this.isSelected=0;
    this.nItems=1;
  }

  ngOnInit() {
    
  }
  addToCart(){
    this.cartService.addToCart.next({product:this.product,count:this.nItems});
    // this.cartService.addProduct(this.product);
  }
}
