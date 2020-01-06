import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

import {API_URLS} from '../config/api.url.config';
import {Produit} from '../shared/produit.model';
import {CrudService} from "../shared/crud.service";

@Injectable()
export class ProduitService implements  CrudService{
  constructor(private http: HttpClient){

  }

  getAll(): Observable<any>{
    return this.http.get(API_URLS.PRODUITS_URL);
  }
  add(entity ): Observable<any>{
    return this.http.post(API_URLS.PRODUITS_URL,entity);
  }
  update(entity): Observable<any>{
    return this.http.put(API_URLS.PRODUITS_URL, entity);
  }
  delete(id): Observable<any>{
    return this.http.delete(API_URLS.PRODUITS_URL + `/${id}` );
  }
}
