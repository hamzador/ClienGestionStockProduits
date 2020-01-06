import {NgModule} from '@angular/core'
import { RouterModule, Routes} from '@angular/router'
import {ProduitComponent} from './produit/produit.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserComponent} from './user/user.component';
import {ProduitResolver} from './produit/produit.resolver';
import {UserResolver} from "./user/user.resolver";
import { HomeComponent} from './home/home.component';
import { LoginComponent} from './login/login.component';
import {RegisterComponent} from "./register/register.component";
import {PostComponent} from "./post/post.component";
import {ServiceComponent} from "./post/service/service.component";


export const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent

},

  {
    path: 'produit',
    component: ProduitComponent,
    },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'register',
    component: RegisterComponent

  },

{
  path: 'home',
  component: HomeComponent,
  children:[
    {
      path: 'produit',
      component: ProduitComponent,
      resolve: {
      produits:ProduitResolver
    },
    outlet: 'contentOutlet'
  },
    {
      path: 'dashboard',
      component: DashboardComponent,
      outlet: 'contentOutlet'
  },
    {
      path: 'poste',
      component: PostComponent,
      outlet: 'contentOutlet'

    },
    {
      path: 'allpost',
      component: ServiceComponent,
      outlet: 'contentOutlet'

    },
    {
      path: 'myMessage',
      component: ServiceComponent,
      outlet: 'contentOutlet'

    },
    {
      path: 'user',
      component: UserComponent,
      resolve:{
        users:UserResolver
      },
      outlet: 'contentOutlet'
    }

  ]

},



 {
   path: '',
   redirectTo: '/home',
   pathMatch: 'full'
 }
];

@NgModule({
imports : [
  RouterModule.forRoot(
    appRoutes,
    {enableTracing: true}
  )
],
  exports: [RouterModule],
  providers:[ProduitResolver,UserResolver]
})
export class AppRoutingModule{

}
