import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  mySubmit() {
    this.authService.login(this.email, this.password).then(
      (res) => {
        console.log('You are logged in');
        this.router.navigate(['/']);
    }).catch(
    this.authService.login(this.email, this.password).then(
      (res) => {
        console.log('You are logged in');
        this.router.navigate(['/login']);
      }));
  }

}
