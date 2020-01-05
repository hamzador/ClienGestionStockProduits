import {Observable} from "rxjs/Observable";
import {Produit} from "./produit.model";


export  interface CrudService {

    getAll(): Observable<any>;

    add(produit: Produit ): Observable<any>;

    update(produit:Produit): Observable<any>;

    delete(id: number): Observable<any>;

}
