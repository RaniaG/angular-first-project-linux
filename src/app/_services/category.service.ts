import { Category } from '../_model/category';

export class CategoryService{
    private categories:Category[];
    constructor(){
        this.categories=[
            {id:1,name:"Arts & Crafts"},
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
            {id:12, name:"Sports & Outdoors"},
        ]
    }
    getAll(){
        return this.categories;
    }
}