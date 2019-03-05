import { Product } from 'src/app/_model/product';

export class ProductService{
    private data:Product[];
    private listingTools:string[];
    constructor(){
        this.data=[
            {id: 0, data: [{name: 'bag very long name'}], price: 200, discount: 20, images:["assets/img/products/product-grey-1.jpg"],tags:[], paymentType:[]},
            {id: 1, data: [{name: 'shoes very long name'}], price: 500, discount: 200, images:["assets/img/products/product-grey-1.jpg"],tags:[], paymentType:[]},
            {id: 2, data: [{name: 'scarf'}], price: 200, images:["assets/img/products/product-grey-1.jpg"],tags:[], paymentType:[]},
            {id: 3, data: [{name: 'backpack'}], price: 350, images:["assets/img/products/product-grey-1.jpg"],tags:[], paymentType:[]},
            {id: 4, data: [{name: 'tshirt'}], price: 200,discount: 10, images:["assets/img/products/product-grey-1.jpg"],tags:[], paymentType:[]}
          ]
          this.listingTools=['Featured','Price low to high','Price high to low','Name'];
    }
    getListingTools(){
        return this.listingTools;
    }
    getAll():Product[]{
        return this.data;
    }
    getById(id:number):Product{
        return this.data.find(x=>x.id===id);
    }
    getRelatedProducts(id:number):Product[]{
        return [this.data[0],this.data[1],this.data[2],this.data[3]];
    }
    add(product:Product){
        product.id=this.data.length;
        console.log(product);
        this.data.push(product);
        console.log(this.data);
    }
    update(product:Product){
        const i=this.data.findIndex(x => x.id === product.id);
        this.data[i]=product;
    }
    delete(id:number)
    {
        const index=this.data.findIndex(x => x.id === id);
        this.data.splice(index,1);
    }
    edit(product){
        var index=this.data.findIndex((x)=>x.id==product.id);
        this.data[index]=product;
    }

}