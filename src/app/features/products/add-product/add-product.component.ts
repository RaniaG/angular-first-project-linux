import { Component, OnInit, ViewChild, Input } from '@angular/core';

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
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/_model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  private product:Product;
  private categories:Category[];
  private paymentTypes:PaymentType[];
  private addProductForm:FormGroup;
  private paymentsFormArray:FormArray;
  private tags:Tag[];
  private tagsDisplay:Tag[];
  private languages:Language[];
  private imagesURLs:string[];
  private selectedTab:number;
  private onSaleControl:FormControl;
  private submitBtnText:string;
 
  constructor(private productService:ProductService, private categoryService:CategoryService,
    private tagService:TagService,private paymentService:PaymentService,
    private langService:LanguageService,
    private activatedRoute:ActivatedRoute,private router:Router) 
    {
      this.categories=this.categoryService.getAll();
      this.paymentTypes=this.paymentService.getAll();
      this.languages=this.langService.getAll();
      this.tags=[];
      this.imagesURLs=[];
      this.selectedTab=0;

      /** get product */
      var productId=parseInt(this.activatedRoute.snapshot.params.id);
      this.product=this.productService.getById(productId);
      
      console.log(this.product);
      
      
   }

  ngOnInit() {
    this.generateFormControls();
    if(this.product!=undefined) //edit mode
     { 
       this.setFormValues();
       this.submitBtnText="Edit";
    }else{
      this.submitBtnText="Add";
    }

  }
  setFormValues(){
    console.log(this.product);
    this.addProductForm.patchValue({
      data: this.product.data,
      categoryId: this.product.categoryId,
      discount:this.product.discount,
      price:this.product.price,
    });

    //onsale variable
    if(this.product.discount) //not null
      this.onSaleControl.setValue(1);
    else this.onSaleControl.setValue(2);

    //tags
    for (let i = 0; i < this.product.tags.length; i++) {
      var tagId = this.product.tags[i];
      this.tags.push(this.tagService.getById(tagId));      
    }
    //payment types
    //get index in payment types array
    console.log(this.paymentsFormArray);
    for (let i = 0; i < this.product.paymentType.length; i++) {
      console.log(this.product.paymentType[i]);
      var index=this.paymentTypes.indexOf(this.paymentService.getById(this.product.paymentType[i]))
      console.log(index);
      this.paymentsFormArray.controls[index].setValue(true);
    }
    //images array
    for (let i = 0; i < this.product.images.length; i++) {
      this.imagesURLs.push(this.product.images[i]);      
    }

  }
  generateFormControls()
  {
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
    
    this.paymentsFormArray=new FormArray([],myValidators.checkedArr);
    for (let i = 0; i < this.paymentTypes.length; i++) {
        this.paymentsFormArray.push(new FormControl());
    }
    
    
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
    this.onSaleControl=new FormControl(1);


    this.onSaleControl.valueChanges.subscribe((value)=>{
      if(value==2)
        {
          this.addProductForm.get('discount').disable();
          this.addProductForm.get('discount').setValue('');
        }
      else this.addProductForm.get('discount').enable();
    });
  }
  
  addTagHandler(event){
    var tag=(event.srcElement as  HTMLInputElement).value;
    this.tagsDisplay=this.tagService.getByName(tag);
    if(event.keyCode==13)
    {
      if(this.tagsDisplay.length==1 && this.tags.findIndex((t)=>t.id==this.tagsDisplay[0].id)==-1)
      {
        this.tags.push(this.tagsDisplay[0]);
      }
      event.target.innerText="";
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
  applySelectedCategories(){
    let item;
    for (let i = 0; i < this.paymentTypes.length; i++) {
      item=this.paymentsFormArray.controls[i];
      if(item.value)
        (this.addProductForm.controls.paymentType as FormArray).controls.push(
          new FormControl(this.paymentTypes[i].id)
        );
    }
  
  
  }
  formSubmitHandler(){
    
    this.applySubmittedTags();
    this.applySelectedCategories();
    this.applyAddedImages();
    if(this.product)
    {
      //edit

      var productId=this.product.id;
      this.product=this.addProductForm.getRawValue();
      console.log(this.product);
      this.product.id=productId;
      this.productService.edit(this.product);
      alert("product edit success");

    }
    else{
      alert("product added ");
      console.log(this.addProductForm.getRawValue());
      this.productService.add(this.addProductForm.getRawValue());
    }
    
    this.router.navigate(["./products"]);
  }
}
