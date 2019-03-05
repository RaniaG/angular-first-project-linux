import { Directive, Input, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyBehDir]'
})
export class MyBehDirDirective implements OnInit {
  @Input('appMyBehDir') Color:{StartColor:string,EndColor:string};
  

  @HostBinding('style.backgroundColor')backColor;
  @HostListener('click')
  onClick(){
    this.backColor=this.Color.EndColor;
  }
  constructor() { 
    // this.Color={StartColor:'red',EndColor:'blue'};
    
  }
  ngOnInit(){
    this.backColor=this.Color.StartColor;

  }
}
