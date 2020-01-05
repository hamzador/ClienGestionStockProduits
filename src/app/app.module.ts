import { BrowserModule } from '@angular/platform-browser';//module externe
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { ProduitComponent} from './produit/produit.component';
import {ProduitMockService} from './produit/produit.mock.service';
import {Produit} from './shared/produit';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule} from './app.routing.module';
import {ProduitService} from './produit/produit.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppService } from './app.service';
import {XhrInterceptor} from './xhr.interceptor';
import { UserComponent } from './user/user.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { OwlModule } from 'ngx-owl-carousel';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './user/register/register.component';

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
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    RegisterComponent

  ],
  imports: [ // liste des modules externes
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SlickCarouselModule,
    Ng2CarouselamosModule,
    OwlModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProduitMockService,
    ProduitService,
    AppService,
    {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true},
    CookieService
  ], // contient la listes des services utiliseés dans l'application
  bootstrap: [AppComponent] // contient les point d'entre de notre programme
})
export class AppModule { }
