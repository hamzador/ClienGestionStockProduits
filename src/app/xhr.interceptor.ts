
import {Injectable} from '@angular/core'
import {HttpInterceptor, HttpRequest,HttpHandler} from '@angular/common/http'
import {CookieService} from 'ngx-cookie-service';


@Injectable()
export class XhrInterceptor implements HttpInterceptor{

constructor(private cookieService: CookieService){}

  intercept(req : HttpRequest<any>, next: HttpHandler){

      const token = this.cookieService.get('token');
//    const token = btoa('user'+ ':' + 'password');

    const xhr =req.clone({//cole faire une copier de cette objet
      headers:req.headers.set('authorization',`Basic ${token}`)
    });
    return next.handle(xhr);
}

}
