import { Component, OnInit } from '@angular/core';
import { TabsComponent } from 'src/app/shared/tabs/tabs.component';
import { Product } from 'src/app/_model/product';
import { CartService } from 'src/app/_services/cart.service';
import { ProductService } from 'src/app/_services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
   private product:Product;
   private isSelected:number;
   private nItems:number;
   private relatedProduts:Product[];
  constructor(private cartService:CartService,private productService:ProductService,
    private activatedRoute:ActivatedRoute
    ) 
    {
      /** get product */
      // var productId=parseInt(this.activatedRoute.snapshot.params.id);


      /**Resolver */
      // this.product=this.activatedRoute.snapshot.data['myProductResolver'];
      
      this.activatedRoute.data.subscribe(
        (data)=>{ 
          this.product=data['myProductResolver'];
      });

      this.isSelected=0;
      this.nItems=1;
      this.relatedProduts=this.productService.getRelatedProducts(this.product.id);
  }

  ngOnInit() {
    
  }
  addToCart(){
    this.cartService.addToCart.next({product:this.product,count:this.nItems});
    // this.cartService.addProduct(this.product);
  }
  getProduct(){
    this.activatedRoute.queryParams.subscribe(
      (params)=>{
        this.product=this.productService.getById(parseInt(params.id));
      }
    )
    
  }
}
