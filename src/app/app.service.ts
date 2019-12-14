import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { map } from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';

import {API_URLS} from './config/api.url.config'


@Injectable({
  providedIn: 'root'})
export class AppService {
  authenticated: boolean = false ;
  constructor(private http: HttpClient, private cookieService: CookieService) { }

  authenticate(credentials, callback){
    //principe de mock
    if(credentials){
      const token = btoa(credentials.username + ':' + credentials.password);
      this.cookieService.set('token', token);//enregistrer les cookies
    //  const headers = new HttpHeaders({
      //  autorization: 'Basic '+ token
      //});
      this.http.get(API_URLS.USER_URL).subscribe(response =>{
        if(response && response['name']){
          this.authenticated = true;
        }
        else{
          this.authenticated = false;
        }
          return callback && callback();
      });
    }
    else{
      this.authenticated= false;
    }
  }

 logout(callback){
  //  const _this = this;
    //this.http.post('logout',{}).subscribe(()=>{
    //  _this.authenticated=false;
    //  return  this.authenticated;
    //});
    return callback && callback();
  }
}
