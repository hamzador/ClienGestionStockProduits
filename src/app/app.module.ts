import { BrowserModule } from '@angular/platform-browser';//module externe
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import  {StoreModule} from '@ngrx/store';
import { ChartModule } from 'angular2-chartjs';

import { AppComponent } from './app.component';
import { ProduitComponent}from './produit/produit.component';
import {ProduitMockService} from './produit/produit.mock.service';
import {Produit} from './shared/produit.model';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule} from './app.routing.module';
import { ProduitService} from './produit/produit.service';
import { UserService} from "./user/user.service";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppService } from './app.service';
import {XhrInterceptor} from './xhr.interceptor';
import { UserComponent } from './user/user.component';
import {principalReducer} from './shared/principal.reducer';
import { CrudComponent } from './shared/crud/crud.component'
@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    CrudComponent

  ],
  imports: [//liste des modeles externes
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({principal: principalReducer}),
    ChartModule
  ],
  providers: [
    ProduitMockService,
    ProduitService,
    AppService,
    {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true},
    CookieService,
    UserService
  ],//contient la listes des servicesutiliser dans notre app
  bootstrap: [AppComponent]//contient les point d'entre de notre programme
})
export class AppModule { }
