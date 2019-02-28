import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  // @Input()products: Product[];
  total:number;
  products:{product:Product,count:number}[];
  constructor(private cartService:CartService) { 
    this.total=0;
    this.products=[];
    this.cartService.addToCart.subscribe(
      ()=>{  this.getCartData();}
    )
    
  }


  ngOnInit() {
    
  }
  
  getCartData(){
    this.products=this.cartService.products;
    this.calcTotal();
  }
  calcTotal(){
    this.total=0;
    this.products.forEach((el)=>{
      var netPrice=this.calcNetPrice(el.product.price,el.product.discount);
      this.total+=netPrice*el.count;
    })
  }
  removeItem(id){
    this.cartService.removeFromCart.next(id);
    // this.cartService.removeFromCart(id);
    this.getCartData();
  }
  calcNetPrice(price:number,discount?:number):number
  {
    if(discount)
      return price-discount;
    else return price;
  }
  ngOnDestroy(): void {
    this.cartService.addToCart.unsubscribe();
}
}
