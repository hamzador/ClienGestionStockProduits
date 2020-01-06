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
  constructor(private http: HttpClient,
              private cookieService: CookieService,
              private  store :Store<PrincipalState>
  ) { }



  authenticate(credentials, callback){
    //console.log(" 1");
    if(credentials){
     // console.log("username : "+credentials.username);//ok
     // console.log("password : "+credentials.password);//ok
      const token = btoa(credentials.username + ':' + credentials.password);
      //console.log(" befor btoa");//ok
      this.cookieService.set('token', token);//enregistrer les cookies
     // console.log(" after btoa");//ok
      //  const headers = new HttpHeaders({
      //  autorization: 'Basic '+ token
      //});

      //console.log("url : "+this.http.get(API_URLS.PRODUITS_URL));//ok
      this.http.get(API_URLS.USER_URL).subscribe(response =>{
      //  console.log("Aprés API_URLS.USER_URL");//not ok
        if (response && response['name']) {
          console.log("response.toString()"+API_URLS.USER_URL);
          this.authenticated = true;

          this.store.dispatch({
            type: SAVE_PRINCIPAL,
            payload: response
          });
          console.log("this.authenticated")
        } else {
          this.authenticated = false;
        }
        return callback && callback();
      });
    }
    else {
      this.authenticated = false;
    }
  }

  logout(callback){
    this.authenticated = false;
    return callback && callback();
  }

}
