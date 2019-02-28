import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { CartService } from 'src/app/_services/cart.service';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()
  product : Product;
  constructor(private cartService:CartService,private productServise:ProductService) { 
  }

  ngOnInit() {
  }
  addToCart(){
    this.cartService.addToCart.next({product:this.product,count:1});
  }
  deleteProduct(){
    if(confirm("are you sure you want to delete?"))
      this.productServise.delete(this.product.id);
  }
}
