import { Component, OnInit } from '@angular/core';
import { Categorie } from "../../../../models/Categorie";
import { CategorieService } from "../../../../services/categorie/categorie.service";

import {NavigationEnd, Router} from '@angular/router';
import {ProduitService} from "../../../../services/produit/produit.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  categories: Categorie[] = [];
  searchTerm: string = '';

  selectedCategory: string = '';

  activeLink: string = 'home';
  activeNavbar: number = 1;
  secondActiveLink!: string;

  params: any = {};

  constructor(
    private categorieService: CategorieService,

    private router: Router,
    private producService:ProduitService,
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getCategories();
    this.setActiveLink()
  }

  getCategories(): void {
    this.categorieService.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (error) => {
        console.error('Error fetching categories:', error);
      }
    });
  }

  searchProducts(): void {
    const params: any = {};
    let searchTerm = this.searchTerm.trim();
    const keywords = searchTerm.split(' ').filter(term => !term.startsWith('#'));

    if (keywords.length > 0) {
      params.name = keywords.join(' ');
    }
    if (this.selectedCategory) {
      params.category = this.selectedCategory;
    }

    if (Object.keys(params).length > 0) {
      this.producService.search(params).subscribe({
        next:(data)=>{
          console.log(data)
        }
      });
    }
  }

  setActiveLink(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const link = event.urlAfterRedirects.split('/');
        if (link[2]) {
          this.activeNavbar = 2;
          this.activeLink = link[1];
          this.secondActiveLink = link[2];
        } else {
          this.activeNavbar = 1;
          this.activeLink = link[1];
        }
      }
    });
  }

}
