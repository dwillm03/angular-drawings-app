import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName;
  password;
  mouseoverLogin = false;

  constructor(private authService: AuthService, private router: Router) { }

  login(formValues){
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['drawings']);
  }
  ngOnInit() {

  }
  cancel()
  {
    this.router.navigate(['drawings']);
  }

}
