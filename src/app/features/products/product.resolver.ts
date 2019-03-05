import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Product } from 'src/app/_model/product';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/_services/product.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductResolver implements Resolve<Product>{

    constructor(private productService:ProductService){
        
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product |Observable<Product> | Promise<Product> {
        var product:Product;
        var id=route.params.id;
        console.log("state");
        console.log(state);
        return new Promise((resolver,reject)=>{
            setTimeout(()=>{
                product=this.productService.getById(parseInt(id));
                resolver(product);
                },2000);
        
        });
    }
}