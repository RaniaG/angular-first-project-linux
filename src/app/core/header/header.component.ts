import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/_services/session.service';
import { User } from 'src/app/_model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user:User;
  constructor(private session:SessionService) { 
  }

  ngOnInit() {
    this.user=this.session.user;
  }

}
