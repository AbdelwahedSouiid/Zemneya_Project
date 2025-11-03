import {Component, OnInit} from '@angular/core';
import {Categorie} from "../../../models/Categorie";
import {ProduitService} from "../../../services/produit/produit.service";
import {Router} from "@angular/router";
import {CategorieService} from "../../../services/categorie/categorie.service";
import {Produit} from "../../../models/Produit";
import {Blog} from "../../../models/Blog";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  blogs : Blog[]=[];

  products: Produit[] = [];  // List of products
  categories: Categorie[] = [];  // List of categories
  filteredProducts: Produit[] = [];  // Filtered products based on selected category
  constructor(private produitService: ProduitService, private router: Router ,private categorieService : CategorieService) {
  }

  ngOnInit() {
    this.findAllProducts();
    this.findAllCategories();
    this.filteredProducts = this.products;  // Initially show all products
    this.filterByCategory('all');
  }
  findAllProducts(): void {
    this.produitService.getProduits().subscribe(
      data => this.products = data
    )
  }

  findAllCategories(): void {
    this.categorieService.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
        console.log(data);
      },
      error: (error) => {
        console.error('Error fetching categories:', error);
      }
    });
  }

  // Method to filter products based on selected category
  filterByCategory(categoryName: string): void {
    if (categoryName === 'all') {
      this.filteredProducts = this.products;  // Show all products
    } else {
      this.filteredProducts = this.products.filter(product => product.categorie.nom === categoryName);
    }
  }


}
