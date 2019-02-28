
import { User } from '../_model/user';

export class SessionService{
    user?:User;
    timeout:number;
    constructor(){
        // this.user=null;
        this.user={
           userName:"hamada",
           password:"1234",
           image:"assets/img/PersonalImage.png"
        };
    }
    login(user,pass){
        this.user={
            userName:user,
            password:pass
        }
    }
    signOut(){
        this.user=null;
    }
}