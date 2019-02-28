import { Subject } from 'rxjs';
import { Product } from '../_model/product';

export class CartService{
    products:{product:Product,count:number}[];
    addToCart:Subject<{product:Product,count:number}>;
    removeFromCart:Subject<number>;
    // constructor(private productService:ProductService){
    constructor(){
        this.addToCart=new Subject<{product:Product,count:number}>();
        this.removeFromCart=new Subject<number>();

        this.products=[];
        this.addToCart.subscribe(
            (productObject)=>{ this.addProduct(productObject); }
        );
        this.removeFromCart.subscribe(
            (productId:number)=>{this.removeProduct(productId);}
        )
        
    }
    private addProduct(productObj:{product:Product,count:number}){
        var index=this.products.findIndex(x=>x.product.id==productObj.product.id);
        if(index==-1)
            this.products.push(productObj);
        else this.products[index].count++;
    }
    removeProduct(productId:number){
        var index=this.products.findIndex(x=>x.product.id==productId);
        this.products.splice(index,1);
        
    }
    ngOnDestroy(): void {
        this.addToCart.unsubscribe();
    }
}