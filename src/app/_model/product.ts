

export interface Product{
    id?:number;
    data?:{
        name?:string;
        description?:string;
        languageId?: number;
    }[]
    price?:number;
    discount?:number;
    images:string[];
    paymentType?:number[];
    categoryId?:number;
    tags:number[];
}