import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { map } from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';

import {API_URLS} from './config/api.url.config'


@Injectable({
  providedIn: 'root'})
export class AppService {
  authenticated: boolean = false ;
  constructor(private http: HttpClient, private cookieService: CookieService) {}



  authenticate(credentials, callback){
    if(credentials){
      const token = btoa(credentials.username + ':' + credentials.password);
      this.cookieService.set('token', token);//enregistrer les cookies

      this.http.get(API_URLS.USER_URL).subscribe(response =>{
        if(response && response['name']){
          console.log(response);
          this.authenticated = true;
        }
        else{
          this.authenticated = false;
        }
          return callback && callback();
      });
    }
    else{
      console.log("benali 5");
      this.authenticated= false;
    }
  }

 logout(callback){
    return callback && callback();
  }
}
