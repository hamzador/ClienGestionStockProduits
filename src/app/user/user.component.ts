import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {User} from "../shared/user.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users : User[];
  //usersForm: FormGroup;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.users = this.route.snapshot.data.users;
  }

}
