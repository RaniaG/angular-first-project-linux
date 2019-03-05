import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appRepeat]'
})
export class RepeatDirective implements OnInit {
  
  @Input('appRepeat') iterations:number
  constructor(private template:TemplateRef<any>,private container:ViewContainerRef) { 
    
  }
  ngOnInit(): void {
      if(this.iterations != undefined)
      {
        for (let i = 0; i < this.iterations; i++) 
          this.container.createEmbeddedView(this.template);
      }

  }

}
