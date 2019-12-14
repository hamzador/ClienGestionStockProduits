import { Component, OnInit } from '@angular/core';
import {AppService} from './app.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ClientGstStokProduct';
  showHideSideBar: boolean = false;
constructor(private appService: AppService,
            private router :Router) {

}

ngOnInit(){//executer automatique apres l'exec du compenenat
if(!this.appService.authenticated){//n'est pas authentifier
    this.router.navigateByUrl('/login');
}
else
{
  this.router.navigateByUrl('/home/');
}
}


}
