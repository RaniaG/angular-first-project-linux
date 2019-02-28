import { Component, OnInit, Input, HostBinding, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @ViewChild('sliderItems')
  sliderItemsDiv
  sliderItemsCollection
  @Input()
  images: string[];
  @HostBinding('class.add-product__images')
  @Input()
  showControls: boolean;
  selectedIndex:number;
  @Output('controlClick')
  controlClickEvent=new EventEmitter<{action:number,slideIndex:number}>()
  constructor() {
    
  }
  
  ngOnInit() {
    // this.images=['assets/img/products/product-grey-7.jpg',
    //             'assets/img/products/product-grey-7.jpg',
    //           'assets/img/products/product-grey-7.jpg']
   this.sliderItemsCollection= this.sliderItemsDiv.nativeElement.children;
   this.selectedIndex=0;
  }
  controlsHandler(actionString:number){
    this.controlClickEvent.next({action:actionString,slideIndex:this.selectedIndex});
  }
}
