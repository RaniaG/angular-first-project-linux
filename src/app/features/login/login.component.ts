import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/_services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  rememberMe:boolean;
  constructor(private session:SessionService) { }

  ngOnInit() {
  }
  login(){
    alert("log in");
    this.session.login(this.username,this.password);
  }
}
