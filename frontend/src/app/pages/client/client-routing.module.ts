import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./fixed/main/main.component";
import {RegisterComponent} from "./register/register.component";
import {ReclamationComponent} from "./reclamation/reclamation.component";
import {ProductsComponent} from "./products/products.component";
import {PanierComponent} from "./panier/panier.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {BlogComponent} from "./blog/blog.component";
import {AchatConfirmationComponent} from "./achat-confirmation/achat-confirmation.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'reclamation', component: ReclamationComponent},
      {path:'products' , component: ProductsComponent},
      { path: 'products/categorie/:category', component: ProductsComponent },
      {path: 'products/search/:searchTerm', component: ProductsComponent},
      {path:'products/product-detail/:id' , component: ProductDetailComponent},
      {path:'panier', component: PanierComponent},
      {path:'blog', component: BlogComponent},
      {path:'achatConfirmation',component: AchatConfirmationComponent},

      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
