import { Component, OnInit } from '@angular/core';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value: any) {
    console.log(value);
  }

}
