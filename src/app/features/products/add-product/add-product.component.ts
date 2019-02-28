import { Component, OnInit, ViewChild } from '@angular/core';

import { ProductService } from 'src/app/_services/product.service';
import { CategoryService } from 'src/app/_services/category.service';
import { Category } from 'src/app/_model/category';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { TagService } from 'src/app/_services/tag.service';
import { PaymentService } from 'src/app/_services/payment.service';
import { PaymentType } from 'src/app/_model/payment';
import { LanguageService } from 'src/app/_services/language.service';
import { Language } from 'src/app/_model/language';
import { Tag } from 'src/app/_model/tag';
import { myValidators } from 'src/app/_utilities/validators';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  private categories:Category[];
  private paymentTypes:PaymentType[];
  private addProductForm:FormGroup;
  private paymentsFormGroup:FormGroup;
  private tags:Tag[];
  private tagsDisplay:Tag[];
  private languages:Language[];
  private imagesURLs:string[];
  private selectedTab:number;
  private onSaleControl:FormGroup;
 
  constructor(private productService:ProductService, private categoryService:CategoryService,
    private tagService:TagService,private paymentService:PaymentService,
    private langService:LanguageService) 
    {
      this.categories=this.categoryService.getAll();
      this.paymentTypes=this.paymentService.getAll();
      this.languages=this.langService.getAll();
      this.tags=[];
      this.imagesURLs=[];
      this.selectedTab=0;

   }

  ngOnInit() {
    /*************************************************** form  *****************************************************************/
    this.addProductForm=new FormGroup({
      data:new FormArray([]),
      price:new FormControl('',Validators.required),
      discount:new FormControl(),
      paymentType:new FormArray([]),
      categoryId:new FormControl(1),
      tags:new FormArray([]),
      images:new FormArray([])
    });
    
    
    /*************************************************** payment types controls *****************************************************************/
    this.paymentsFormGroup=new FormGroup({
      arr: new FormArray(this.paymentTypes.map(c=> new FormControl(false)),myValidators.checkedArr)
    });
    
    
    /*************************************************** languages data tabs *****************************************************************/
    let fg:FormGroup;
    for (let i = 0; i < this.languages.length; i++) {
      fg=new FormGroup({
        name:new FormControl('',[Validators.required,Validators.pattern("^[A-Za-z][A-Za-z ]+$")]),
        description: new FormControl('',Validators.required),
        languageId: new FormControl(this.languages[i].id)
      });
      (this.addProductForm.controls.data as FormArray).controls.push(fg);
    }
    
    /***************************************************  prices ********************************************************************* */
    this.onSaleControl=new FormGroup({
      onSale:new FormControl(1)
    })


        this.onSaleControl.get('onSale').valueChanges.subscribe((value)=>{
          if(value==2)
            this.addProductForm.get('discount').disable();
          else this.addProductForm.get('discount').enable();
        });
  }
  
  formSubmitHandler(){
    
    this.applySubmittedTags();
    this.applySelectedCategories();
    this.applyAddedImages();
    alert("product added ");
    console.log(this.addProductForm.getRawValue());
    this.productService.add(this.addProductForm.getRawValue());
    console.log(this.onSaleControl.value);
    console.log(this.onSaleControl.get('onSale').value);
    console.log(this.paymentsFormGroup.get('arr'));


  }
  applySelectedCategories(){
    let item;
    for (let i = 0; i < this.paymentTypes.length; i++) {
      item=(this.paymentsFormGroup.controls.arr as FormArray).controls[i];
      if(item.value)
        (this.addProductForm.controls.paymentType as FormArray).controls.push(
          new FormGroup({
            id: new FormControl(this.paymentTypes[i].id),
            name: new FormControl(this.paymentTypes[i].name)
          })
        );
    }


  }
  addTag(event){
    var tag=(event.srcElement as  HTMLInputElement).value;
    this.tagsDisplay=this.tagService.getByName(tag);
    var tagId=this.tagService.getId(tag);
    if(event.keyCode==13)
    {
      if(tagId!=null&& this.tagsDisplay.length==1 && this.tags.findIndex((t)=>t.id==tagId)==-1)
        {
          console.log(tagId);
          this.tags.push(this.tagsDisplay[0]);
          event.target.innerText="";
      }
    }
    
  }
  removeTag(event:Event){
    var tag=(event.srcElement as  HTMLInputElement).value;
    var tagId=parseInt(event.srcElement.parentElement.parentElement.id.split('-')[1]);
    event.srcElement.parentElement.parentElement.remove() ;
    var index=this.tags.findIndex(t=>t.id==tagId);
    this.tags.splice(index,1);
  }
  clearAllTags(tagBox:HTMLElement){
    for (let i = 1; i < tagBox.children.length; i++) {
      tagBox.removeChild(tagBox.children[i]);    
    }
    this.tags=[];
  }
  applySubmittedTags(){
    for (let i = 0; i < this.tags.length; i++) {
      (this.addProductForm.controls.tags as FormArray).controls.push(
        new FormControl(this.tags[i].id)
      );
    }

  }
  applyAddedImages(){
    this.imagesURLs.forEach((element)=>{
      (this.addProductForm.get('images') as FormArray).controls.push(new FormControl(element));
    })
  }
  addImage(){
    // alert("add image");
    let url='assets/img/products/product-grey-7.jpg';
    this.imagesURLs.push(url);
  }
  editImage(slideIndex){
    alert("edit image");
    this.imagesURLs[slideIndex]; //= 7aga
  }
  deleteImage(slideIndex){
    alert("delete image");
    this.imagesURLs.splice(slideIndex,1);
  }
  sliderActionHandler(eventObject:{action:number,slideIndex:number}){
    switch (eventObject.action) {
      case 0: //case add
        this.addImage();
        break;
      case 1://case edit
        this.editImage(eventObject.slideIndex);
        break;
      case 2://case delete
        this.deleteImage(eventObject.slideIndex);
        break;
    }
  }


}
