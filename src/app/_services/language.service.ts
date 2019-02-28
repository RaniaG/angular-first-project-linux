import { Language } from '../_model/language';

export class LanguageService{
    languages:Language[]=[
        {id:1, name:"English"},
        {id:2, name:"Arabic"},
        {id:3, name:"French"}
    ];

    getAll(){
        return this.languages;
    }
    getById(id:number):Language{
        return this.languages.find(x=>x.id==id);
    }
    
}