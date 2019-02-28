import { PaymentType } from '../_model/payment';

export class PaymentService{
    paymentTypes:PaymentType[] =[
        {id:1, name:"Direct Bank Transfer"},
        {id:2, name:"PayPal"},
        {id:3, name:"MasterCard"},
        {id:4, name:"Cheque Payment"},
        {id:5, name:"Visa"},
        {id:6, name:"On Delivery"}
    ]
    getAll(){
        return this.paymentTypes;
    }
}