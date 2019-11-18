import { BrowserModule } from '@angular/platform-browser';//module externe
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';//???
import { AppComponent } from './app.component';
import { ProduitComponent}from './produit/produit.component';
import {ProduitMockService} from './produit/produit.mock.service';
import {Produit} from './shared/produit';
@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent
  ],
  imports: [//liste des modeles externes
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProduitMockService],//contient la listes des servicesutiliser dans notre app
  bootstrap: [AppComponent]//contient les point d'entre de notre programme
})
export class AppModule { }
