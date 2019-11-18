import { BrowserModule } from '@angular/platform-browser';//module externe
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent}from './produit/produit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent
  ],
  imports: [//liste des modeles externes
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],//contient la listes des servicesutiliser dans notre app
  bootstrap: [AppComponent]//contient les point d'entre de notre programme
})
export class AppModule { }
