import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective implements OnInit{

  @Input('appMyIf')isVisible:boolean;
  constructor(private template:TemplateRef<any>,private container:ViewContainerRef) { 

  }
  ngOnInit(){
    if(this.isVisible)
    {
      this.container.createEmbeddedView(this.template);
    }
  }
}
