import {Component, OnInit} from '@angular/core';
import {Produit} from "../../../models/Produit";
import {ProduitService} from "../../../services/produit/produit.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Categorie} from "../../../models/Categorie";
import {CategorieService} from "../../../services/categorie/categorie.service";
import {SearchParams} from "../../../models/SearchParams";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  params: SearchParams = {
  };
  products: Produit[]= [] ;
  searchTerm: string = '';
  categories : Categorie[]=[];
  constructor(private produitService: ProduitService, private router: Router,private route: ActivatedRoute,private categorieService : CategorieService) {
  }
  ngOnInit(): void {
    // Subscribe to the query parameters
    this.route.queryParams.subscribe(params => {
      console.log('Query params received:', params);  // Log the raw query params
      // Set parameters to the component's params object
      this.params.category = params['category'] || '';
      this.params.name = params['name'] || '';

      console.log('Component params after assignment:', this.params);  // Log updated params
      this.searchProducts(); // Call the search method
    });
    this.findAllCategories();
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.products = [];
  }


  searchProducts(): void {
    if (Object.keys(this.params).length > 0) {
      this.produitService.search(this.params).subscribe({
        next: (products) => {
          this.products = products; // Met à jour les produits affichés
          console.log('Products filtered:', products); // Log pour vérification
        },
        error: (err) => {
          console.error('Search error:', err); // Gère les erreurs
        }
      });
    }
  }
  filterByCategory(categoryName: string): void {
    this.params.category = categoryName; // Met à jour la catégorie sélectionnée
    this.params.name = ''; // Optionnel : Réinitialiser le champ de recherche par nom

    console.log('Filtering by category:', this.params.category); // Log pour vérification
    this.searchProducts(); // Appelle la recherche avec les nouveaux paramètres
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

}
