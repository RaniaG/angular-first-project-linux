import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoriesComponent} from './categories/categories.component';
import {SearchBoxComponent} from './search-box/search-box.component';
import {TagsComponent} from './tags/tags.component';
import {RatingComponent} from './rating/rating.component';
import {SliderComponent} from './slider/slider.component';
import {TabsComponent} from './tabs/tabs.component';
import {DropdownComponent} from './dropdown/dropdown.component';
import { MyIfDirective } from './my-if.directive';



@NgModule({
  declarations: [
    CategoriesComponent,
    SearchBoxComponent,
    TagsComponent,
    RatingComponent,
    SliderComponent,
    TabsComponent,
    DropdownComponent,
    MyIfDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CategoriesComponent,
    SearchBoxComponent,
    TagsComponent,
    RatingComponent,
    SliderComponent,
    TabsComponent,
    DropdownComponent,
    MyIfDirective
  ]
})
export class SharedModule { }
