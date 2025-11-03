# Projet Zemneya

Application web complète avec un backend Spring Boot et un frontend Angular.

###

<p align="center">
  <a href="https://youtu.be/16UDzqwu9k8" target="_blank">
    <img src="https://img.youtube.com/vi/16UDzqwu9k8/maxresdefault.jpg" 
         alt="Présentation du projet" 
         width="600" />
  </a>
</p>

###

## Structure du projet

```
Zemneya/
├── backend/          # Code source du backend (Spring Boot)
├── frontend/         # Code source du frontend (Angular)
├── .gitignore        # Fichier d'exclusion Git pour les deux projets
└── README.md         # Ce fichier
```

## Prérequis

### Backend
- JDK 17 ou supérieur
- Maven 3.8 ou supérieur
- Base de données (configurée dans `backend/src/main/resources/application.yml`)

### Frontend
- Node.js 16.x ou supérieur
- npm 8.x ou supérieur
- Angular CLI 15.x ou supérieur

## Installation

### Backend

1. Se déplacer dans le dossier du backend :
   ```bash
   cd backend
   ```

2. Construire le projet avec Maven :
   ```bash
   mvn clean install
   ```

3. Démarrer l'application :
   ```bash
   mvn spring-boot:run
   ```

### Frontend

1. Se déplacer dans le dossier du frontend :
   ```bash
   cd frontend
   ```

2. Installer les dépendances :
   ```bash
   npm install
   ```

3. Démarrer l'application en mode développement :
   ```bash
   ng serve
   ```

4. Ouvrir un navigateur à l'adresse : [http://localhost:4200](http://localhost:4200)

## Configuration

### Backend

Le fichier de configuration principal se trouve dans :
`backend/src/main/resources/application.yml`

### Frontend

Les variables d'environnement peuvent être configurées dans :
`frontend/src/environments/environment.ts` (développement)
`frontend/src/environments/environment.prod.ts` (production)

## Déploiement

### Backend

Pour créer un fichier JAR exécutable :
```bash
cd backend
mvn clean package -DskipTests
```

Le fichier JAR sera généré dans : `backend/target/zemneya-backend-0.0.1-SNAPSHOT.jar`

### Frontend

Pour construire pour la production :
```bash
cd frontend
ng build --configuration production
```

Les fichiers de production seront générés dans : `frontend/dist/`

## Contribution

1. Créer une branche pour votre fonctionnalité :
   ```bash
   git checkout -b feature/nouvelle-fonctionnalite
   ```

2. Faire un commit de vos modifications :
   ```bash
   git commit -m "Ajout d'une nouvelle fonctionnalité"
   ```

3. Pousser les modifications vers le dépôt distant :
   ```bash
   git push origin feature/nouvelle-fonctionnalite
   ```

4. Créer une Pull Request

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.
