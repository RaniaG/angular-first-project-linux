import { PaymentType } from './payment';
import { Category } from './category';
import { Tag } from './tag';

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
    paymentType?:PaymentType;
    categoryId?:number;
    tags:number[];
}