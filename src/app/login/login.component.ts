import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms'
import {AppService} from '../app.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  credentials = {
    username: '',
    password: ''
  };
  constructor(private fb: FormBuilder,
              private appService: AppService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username : ['', [Validators.required, Validators.minLength(3)]],
      password : ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  login() {
    console.log('hello1');
    this.appService.authenticate(this.credentials, () => {
        console.log('hello2');
        this.router.navigateByUrl('/home');
    });
  }

  register(){
   // this.router.navigateByUrl('/register');
    this.router.navigate(['register']);
   // this.router.navigateByUrl('/register');
  }

}
