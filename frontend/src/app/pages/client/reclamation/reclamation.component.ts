import { Component } from '@angular/core';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrl: './reclamation.component.css'
})
export class ReclamationComponent {
  // Méthode appelée lors de la soumission du formulaire
  onSubmit() {
    alert("Votre réclamation a bien été envoyée !");
  }
}
