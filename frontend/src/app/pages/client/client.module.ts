import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './fixed/main/main.component';
import { NavbarComponent } from './fixed/navbar/navbar.component';
import { FooterComponent } from './fixed/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ClientRoutingModule} from "./client-routing.module";
import { ReclamationComponent } from './reclamation/reclamation.component';
import { ProductsComponent } from './products/products.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PanierComponent } from './panier/panier.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AchatConfirmationComponent } from './achat-confirmation/achat-confirmation.component';
import { BlogComponent } from './blog/blog.component';



@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ReclamationComponent,
    ProductsComponent,
    PanierComponent,
    ProductDetailComponent,
    AchatConfirmationComponent,
    BlogComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ClientRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
