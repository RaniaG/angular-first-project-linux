import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoriesComponent} from './categories/categories.component';
import {SearchBoxComponent} from './search-box/search-box.component';
import {TagsComponent} from './tags/tags.component';
import {RatingComponent} from './rating/rating.component';
import {SliderComponent} from './slider/slider.component';
import {TabsComponent} from './tabs/tabs.component';
import {DropdownComponent} from './dropdown/dropdown.component';
import { MyIfDirective } from './directives/my-if.directive';
import { MyBehDirDirective } from './directives/my-beh-dir.directive';
import { RepeatDirective } from './directives/repeat.directive';



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
    MyBehDirDirective,
    RepeatDirective,
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
    MyIfDirective,
    MyBehDirDirective,
    RepeatDirective
  ]
})
export class SharedModule { }
