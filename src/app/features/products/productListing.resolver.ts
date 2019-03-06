import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Product } from 'src/app/_model/product';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/_services/product.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductListingResolver implements Resolve<Product[]>{

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product[] | Observable<Product[]> | Promise<Product[]> {
        return this.productService.getAll();
    }
    constructor(private productService:ProductService)
    {

    }

}