import {Injectable} from '@angular/core';
import { Resolve } from '@angular/router';
import { ProduitService } from './produit.service';

@Injectable(
  //{
//  providedIn: 'root'
//}
)
export class ProduitResolver implements Resolve<any>{

  constructor(private productService:ProduitService){

  }
  resolve(){
    //return this.productService.getAll();
    return this.productService.getAll();
  }
}
