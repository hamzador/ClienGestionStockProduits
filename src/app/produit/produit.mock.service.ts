import {Injectable} from '@angular/core';
import {Produit} from '../shared/produit.model';
import {CrudService} from "../shared/crud.service";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {API_URLS} from "../config/api.url.config";

@Injectable()//injecter ce service dans plusieurs composant
export class ProduitMockService implements  CrudService{

  private PRODUITS: Produit[] = [];
  constructor(){
    let p1 : Produit = new Produit(1,'Livre', 50, 20);
    let p2 : Produit = new Produit(2,'Cahier', 200, 5.25);
    let p3 : Produit = new Produit(3,'Stylo', 500, 2.10);
    this.PRODUITS.push(p1);
    this.PRODUITS.push(p2);
    this.PRODUITS.push(p3);
  }


  getAll(): Observable<any>{
    return of(this.PRODUITS);
}
  add(produit ): Observable<any>{
    return of('Success');
}
  update(produit): Observable<any>{
    return of('Success');
}
  delete(id): Observable<any>{
    return of('Success');
}


}
