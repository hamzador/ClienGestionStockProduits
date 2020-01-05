import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

import {AppService} from '../app.service';
import {FormGroup} from "@angular/forms";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  showSideBar: boolean;

  @Output()//derictive d'angular
  showSideBarChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private appService : AppService, private router : Router) { }

  ngOnInit() {
  }

afficherSideBar(){
  this.showSideBar = !this.showSideBar;
  this.showSideBarChange.emit(this.showSideBar);
}

logout(){
  this.appService.logout(()=>{
    this.router.navigateByUrl('/login');//navigateByUrl
  });

}
  clickService(){
    this.router.navigateByUrl('/home/(contentOutlet:poste)');
  }
  // searchForm:FormGroup;
  // search(){
  //
  // }

}
