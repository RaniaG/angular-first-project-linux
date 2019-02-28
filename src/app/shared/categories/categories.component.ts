import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_services/category.service';
import { Category } from 'src/app/_model/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories:Category[];
  constructor(private categoryService:CategoryService) { 
    this.categories=this.categoryService.getAll();
  }

  ngOnInit() {
  }

}
