import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-products-listing',
  templateUrl: './products-listing.component.html',
  styleUrls: ['./products-listing.component.scss']
})
export class ProductsListingComponent implements OnInit {

  data:Product[];
  listingTools: string[];
  itemsPerPage: number;
  constructor(private productService:ProductService) {
   }

  ngOnInit() {
    this.data=this.productService.getAll();
    this.itemsPerPage=Math.ceil(this.data.length/9);
    this.listingTools=this.productService.getListingTools();
  }

}
