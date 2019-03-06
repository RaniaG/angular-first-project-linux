import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appRepeat]'
})
export class RepeatDirective implements OnInit {
  
  @Input('appRepeatOf') iterations:number
  
  constructor(private template:TemplateRef<any>,private container:ViewContainerRef) { 
    
  }
  ngOnInit(): void {
    // const input of this.iterations;
      if(this.iterations != undefined)
      {
        for (let i = 0; i < this.iterations; i++) 
          {
            this.container.createEmbeddedView(this.template,{$implicit: i+1});   
          }
      }

  }

}
