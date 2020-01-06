import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { map } from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';
import {Store} from "@ngrx/store";


import {API_URLS} from './config/api.url.config'
import {PrincipalState} from "./shared/principal.state";
import {SAVE_PRINCIPAL} from "./shared/save.principal.action";

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
          console.log("response " + response);
          this.authenticated = true;
          this.store.dispatch({
            type: SAVE_PRINCIPAL,
            payload: response
          });
        }
        else{
          this.authenticated = false;
        }
          return callback && callback();
      });
    }
    else{
      //console.log(" 5");
      this.authenticated= false;
    }
  }

 logout(callback){
    return callback && callback();
  }
}
