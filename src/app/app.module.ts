import { BrowserModule } from '@angular/platform-browser';//module externe
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {StoreModule} from '@ngrx/store';
import { ChartModule } from 'angular2-chartjs';

import { AppComponent } from './app.component';
import { ProduitComponent} from './produit/produit.component';
import {ProduitMockService} from './produit/produit.mock.service';
import {Produit} from './shared/produit.model';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule} from './app.routing.module';
import { ProduitService} from './produit/produit.service';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppService } from './app.service';
import {XhrInterceptor} from './xhr.interceptor';
import { UserComponent } from './user/user.component';
import {principalReducer} from './shared/principal.reducer';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { OwlModule } from 'ngx-owl-carousel';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './user/register/register.component';
import {UserService} from "./services/userService";
import {AuthenticationService} from "./services/authentication.service";
import {AlertService} from "./services/alert.service";
import { CrudComponent } from './shared/crud/crud.component';
import { MyChartComponent } from './my-chart/my-chart.component';
import { PostComponent } from './post/post.component'
import {CommentService} from "./post/comment.service";
import { ServiceComponent } from './post/service/service.component';
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
    CrudComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    RegisterComponent,
    MyChartComponent,
    RegisterComponent,
    PostComponent,
    ServiceComponent

  ],
  imports: [ // liste des modules externes
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({principal: principalReducer}),
    ChartModule,
    SlickCarouselModule,
    Ng2CarouselamosModule,
    OwlModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    StoreModule.forRoot({principal: principalReducer}),
    FormsModule

  ],
  providers: [
    ProduitMockService,
    ProduitService,
    AppService,
    {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true},
    CookieService,
    UserService,
    AuthenticationService,
    AlertService,
    CommentService
  ], // contient la listes des services utiliseés dans l'application
  bootstrap: [AppComponent] // contient les point d'entre de notre programme
// contient la listes des servicesutiliser dans notre app
// contient les point d'entre de notre programme
})
export class AppModule { }
