import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

import {ProduitService} from './produit.service';
import {Produit} from '../shared/produit.model';
import {DataModel} from "../shared/data.model";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit{

  produitModel:DataModel[];

  produitForm: FormGroup;

  produits : Produit[];

  produit : Produit= new Produit();
  constructor(private produitService: ProduitService, private fb:FormBuilder, private route: ActivatedRoute){
  }
 ngOnInit(){
  this.produits = this.route.snapshot.data.produits;
   this.produitForm = this.fb.group({
     ref: ['', Validators.required],
     quantite: '',
     prixUnitaire: ''
   });
   this.produitModel = [
     new DataModel('id','ID','number',true,[]),
     new DataModel('ref','Référence','string',false,[]),
     new DataModel('quantite','Quantité','number',false,[]),
     new DataModel('prixUnitaire','Prix Unitaire ','number',false,[])
   ]
}

}
