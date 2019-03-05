import { Tag } from '../_model/tag';
import { TagsComponent } from '../shared/tags/tags.component';

export class TagService{
    tags:Tag[];
    constructor(){
        this.tags=[
            {id:1,name:"Crafts"},
            {id:2, name:"Automotive"},
            {id:3, name:"Baby"},
            {id:4, name:"Books"},
            {id:5, name:"Electronics"},
            {id:6, name:"Women's Fashion"},
            {id:7, name:"Men's Fashion"},
            {id:8, name:"Health & HouseHold"},
            {id:9, name:"Home & Kitchen"},
            {id:10, name:"Military Accessories"},
            {id:11, name:"Movies & Television"},
            {id:12, name:"Sports & Outdoors"}
        ]
    }
    getAll()
    {
        return this.tags;
    }
    getByName(name:string):Tag[]{
       return this.tags.filter((x)=>x.name.toLowerCase().includes(name.toLowerCase()));
    }
    getId(name:string):number|null
    {
        var x=this.tags.find((x)=>x.name.toLowerCase().includes(name.toLowerCase()));
        if(x)
        return x.id;
        else return null;
    }
    getById(id:number):Tag{
        return this.tags.find((x)=>x.id==id);
    }
}