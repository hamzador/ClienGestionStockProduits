import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppService} from "../app.service";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
import {UserService} from "../user/user.service";
import {AlertService} from "./alert.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup;
  loading = false;
  submitted = false;

  credentialsReg ={
    firstName: '',
    lastName: '',
    usernameReg: '',
    passwordReg: ''
  };
  constructor(private fb: FormBuilder,
              private appService : AppService,
              private router : Router,
              private userService: UserService,
              private alertService: AlertService) { }

  ngOnInit() {
    this.registerForm =this.fb.group({
      firstName: ['', Validators.required,Validators.minLength(2)],
      lastName: ['', Validators.required, Validators.minLength(2)],
      usernameReg : ['',[Validators.required, Validators.minLength(3)]],
      emailReg : ['', [Validators.required, Validators.minLength(6)]],
      passwordReg : ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    this.userService.add(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

  // register(){
  //
  // }

}
