import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  
  @Input() direction:string
  @Output() OnOpen= new EventEmitter<any>();
  open:boolean;
  constructor() {
    this.open=false;
   }

  ngOnInit() {
  }

  ddClick(){
    this.open=!this.open;
    if(this.open)
    {
      this.OnOpen.next();
    }
  }
}
