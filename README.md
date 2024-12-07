### **ENGLISH README.md**

# **Vapeur**

**Project Vapeur** is a web application inspired by the management of video game collections, much like what **Steam** does, with its name meaning "vapor." Just as steam powers machines, our project aims to be the engine for organizing your games efficiently. With **Vapeur**, users can classify, view, modify, and expand their game collection while navigating a structured and intuitive environment.

This guide will help you set up the **Vapeur** project using **Express.js**, **Prisma**, and **Handlebars**. Follow these steps to launch the project on your local machine.

## **Prerequisites**

Before you begin, ensure that your environment is set up to use Node.js, Express.js, Prisma, and Handlebars. Follow the instructions below to get everything configured.

## **Installing Node.js**

1. **Download and Install Node.js**:  
   Visit the [official Node.js website](https://nodejs.org/) and download the recommended LTS version. Install Node.js by following the instructions for your operating system.

2. **Verify Installation**:  
   Once installed, open a terminal and run the following commands to check:  

   ```bash
   node -v
   npm -v
   ```

   These commands should display the versions of **Node.js** and **npm**.

3. **Common Issues**:  
   If you encounter an error like:  

   > Cannot load the npm.ps1 file because script execution is disabled...

   - Open PowerShell as an administrator.  
   - Enter the following command to allow scripts:  

   ```powershell
   Set-ExecutionPolicy RemoteSigned
   ```

   - Retry `npm -v`.

## **Installing Express.js**

1. **Clone the Repository & Initialize the Project**:  
   In a directory of your choice, open a terminal and initialize the project:  

   ```bash
   git clone https://github.com/your-username/vapeur.git
   cd vapeur
   npm init -y
   ```

2. **Install Express.js**:  

   ```bash
   npm install express
   ```

3. **Start the Server**:  

   ```bash
   node server.js
   ```

   Open a browser and navigate to `http://localhost:3000`.

4. **Issue with Node.js?**  
   - If you need to restart the server frequently, install Nodemon to ease development:  

   ```bash
   npm install -g nodemon
   nodemon server.js
   ```

## **Installing Prisma**

1. **Install Prisma CLI**:  
   In your project folder, run:  

   ```bash
   npm install prisma @prisma/client sqlite3
   ```

2. **Initialize Prisma**:  

   ```bash
   npx prisma init
   ```

   This will generate a `.env` file and a `prisma/` folder.

3. **Database Setup**:  
   - In the `.env` file, configure your database connection.  
   Example for SQLite:  

   ```env
   DATABASE_URL="file:./dev.db"
   ```

4. **Push Schema to Database**:  

   ```bash
   npx prisma db push
   ```

5. **Generate Prisma Client**:  

   ```bash
   npx prisma generate
   ```

## **Installing Handlebars**

1. **Install Handlebars**:  
   In your project folder, install Handlebars using npm:  

   ```bash
   npm install express-handlebars
   ```

2. **Set Up Handlebars**:  
   Configure Handlebars as the view engine in your `server.js` file:  

   ```javascript
   const express = require('express');
   const exphbs = require('express-handlebars');

   const app = express();

   app.engine('hbs', exphbs({ extname: '.hbs' }));
   app.set('view engine', 'hbs');
   ```

### **What is Handlebars?**

Handlebars is a templating engine used for generating dynamic HTML pages. It allows you to create reusable components and simplifies the integration of data into HTML templates. With Handlebars, you can manage the layout of your web application more efficiently by using layouts, partials, and helpers.

## **Useful Commands**

| Command                           | Description                                                 |
|-----------------------------------|-------------------------------------------------------------|
| `npm init -y`                     | Initialize a Node.js project.                               |
| `npm install express`             | Install Express.js.                                         |
| `npm install prisma --save-dev`   | Install Prisma CLI.                                         |
| `npx prisma init`                 | Initialize Prisma.                                          |
| `npx prisma db push`              | Sync the Prisma schema with the database.                   |
| `npx prisma generate`             | Generate the Prisma Client.                                 |
| `npm install express-handlebars`  | Install Handlebars template engine.                         |
| `node server.js`                  | Start the Express.js server.                                |

---

### **Site Structure**

```
vapeur/
├── prisma/
│   ├── schema.prisma                     # Database schema with Prisma
├── public/
│   ├── css/
│   │   └── style.css                     # CSS files for styling
│   ├── images/                           # Images for games, genres, editors
│   ├── js/
│       └── script.js                     # Front-end scripts (if needed)
├── views/
│   ├── layouts/
│   │   └── main.hbs                      # Main layout for Handlebars
│   ├── partials/
│   │   ├── header.hbs                    # Common header for all pages
│   │   └── footer.hbs                    # Common footer for all pages
│   ├── index.hbs                         # Homepage (featured games list)
│   ├── games.hbs                         # Game management page
│   ├── genres.hbs                        # Genre management page
│   └── editors.hbs                       # Editor management page
├── src/
│   ├── routes/
│   │   ├── games.js                      # Routes for game management
│   │   ├── genres.js                     # Routes for genre management
│   │   └── editors.js                    # Routes for editor management
│   ├── controllers/
│   │   ├── gamesController.js            # Game business logic
│   │   ├── genresController.js           # Genre business logic
│   │   └── editorsController.js          # Editor business logic
│   └── server.js                         # Application entry point
├── .env                                  # Environment variables (DB URL, etc.)
├── .gitignore                            # Files to ignore in Git
├── README.md                             # Project documentation
├── package.json                          # Node.js dependencies
└── package-lock.json                     # Dependency lock file

### **README.md FRANÇAIS**

# **Vapeur**

**Projet Vapeur** est une application web inspirée de la gestion des collections de jeux vidéo, similaire à **Steam**, avec un nom signifiant "vapeur." Tout comme la vapeur alimente les machines, notre projet vise à être le moteur pour organiser efficacement vos jeux. Avec **Vapeur**, les utilisateurs peuvent classer, visualiser, modifier et enrichir leur collection de jeux tout en naviguant dans un environnement structuré et intuitif.

Ce guide vous aidera à configurer le projet **Vapeur** en utilisant **Express.js**, **Prisma** et **Handlebars**. Suivez ces étapes pour lancer le projet sur votre machine locale.

## **Prérequis**

Avant de commencer, assurez-vous que votre environnement est configuré pour utiliser Node.js, Express.js, Prisma et Handlebars. Suivez les instructions ci-dessous pour tout configurer.

## **Installation de Node.js**

1. **Téléchargez et installez Node.js** :  
   Rendez-vous sur le [site officiel de Node.js](https://nodejs.org/) et téléchargez la version LTS recommandée. Installez Node.js en suivant les instructions correspondant à votre système d’exploitation.

2. **Vérifiez l’installation** :  
   Une fois installé, ouvrez un terminal et exécutez les commandes suivantes pour vérifier :  

   ```bash
   node -v
   npm -v
   ```

   Ces commandes doivent afficher les versions de **Node.js** et de **npm**.

3. **Problèmes courants** :  
   Si vous rencontrez une erreur telle que :  

   > Impossible de charger le fichier npm.ps1 car l’exécution des scripts est désactivée...

   - Ouvrez PowerShell en tant qu’administrateur.  
   - Entrez la commande suivante pour autoriser les scripts :  

   ```powershell
   Set-ExecutionPolicy RemoteSigned
   ```

   - Réessayez `npm -v`.

## **Installation de Express.js**

1. **Clonez le dépôt et initialisez le projet** :  
   Dans un répertoire de votre choix, ouvrez un terminal et initialisez le projet :  

   ```bash
   git clone https://github.com/your-username/vapeur.git
   cd vapeur
   npm init -y
   ```

2. **Installez Express.js** :  

   ```bash
   npm install express
   ```

3. **Démarrez le serveur** :  

   ```bash
   node server.js
   ```

   Ouvrez un navigateur et accédez à `http://localhost:3000`.

4. **Problèmes avec Node.js ?**  
   - Si vous avez besoin de redémarrer fréquemment le serveur, installez Nodemon pour faciliter le développement :  

   ```bash
   npm install -g nodemon
   nodemon server.js
   ```

## **Installation de Prisma**

1. **Installez Prisma CLI** :  
   Dans votre dossier de projet, exécutez :  

   ```bash
   npm install prisma @prisma/client sqlite3
   ```

2. **Initialisez Prisma** :  

   ```bash
   npx prisma init
   ```

   Cela générera un fichier `.env` et un dossier `prisma/`.

3. **Configuration de la base de données** :  
   - Dans le fichier `.env`, configurez la connexion à votre base de données.  
   Exemple pour SQLite :  

   ```env
   DATABASE_URL="file:./dev.db"
   ```

4. **Appliquez le schéma à la base de données** :  

   ```bash
   npx prisma db push
   ```

5. **Générez le client Prisma** :  

   ```bash
   npx prisma generate
   ```

## **Installation de Handlebars**

1. **Installez Handlebars** :  
   Dans votre dossier de projet, installez Handlebars avec npm :  

   ```bash
   npm install express-handlebars
   ```

2. **Configurez Handlebars** :  
   Configurez Handlebars comme moteur de vues dans votre fichier `server.js` :  

   ```javascript
   const express = require('express');
   const exphbs = require('express-handlebars');

   const app = express();

   app.engine('hbs', exphbs({ extname: '.hbs' }));
   app.set('view engine', 'hbs');
   ```

### **Qu’est-ce que Handlebars ?**

Handlebars est un moteur de templates utilisé pour générer des pages HTML dynamiques. Il permet de créer des composants réutilisables et simplifie l’intégration des données dans des templates HTML. Avec Handlebars, vous pouvez gérer la mise en page de votre application web plus efficacement grâce à l’utilisation de layouts, de partials et de helpers.

## **Commandes Utiles**

| Commande                          | Description                                                 |
|-----------------------------------|-------------------------------------------------------------|
| `npm init -y`                     | Initialiser un projet Node.js.                              |
| `npm install express`             | Installer Express.js.                                       |
| `npm install prisma --save-dev`   | Installer Prisma CLI.                                       |
| `npx prisma init`                 | Initialiser Prisma.                                         |
| `npx prisma db push`              | Synchroniser le schéma Prisma avec la base de données.      |
| `npx prisma generate`             | Générer le client Prisma.                                   |
| `npm install express-handlebars`  | Installer le moteur de template Handlebars.                 |
| `node server.js`                  | Démarrer le serveur Express.js.                             |

---

### **Structure du Site**

```
vapeur/
├── prisma/
│   ├── schema.prisma                     # Schéma de base de données avec Prisma
├── public/
│   ├── css/
│   │   └── style.css                     # Fichiers CSS pour le style
│   ├── images/                           # Images pour les jeux, genres, éditeurs
│   ├── js/
│       └── script.js                     # Scripts front-end (si nécessaire)
├── views/
│   ├── layouts/
│   │   └── main.hbs                      # Mise en page principale pour Handlebars
│   ├── partials/
│   │   ├── header.hbs                    # En-tête commun pour toutes les pages
│   │   └── footer.hbs                    # Pied de page commun pour toutes les pages
│   ├── index.hbs                         # Page d'accueil (liste des jeux en vedette)
│   ├── games.hbs                         # Page de gestion des jeux
│   ├── genres.hbs                        # Page de gestion des genres
│   └── editors.hbs                       # Page de gestion des éditeurs
├── src/
│   ├── routes/
│   │   ├── games.js                      # Routes pour la gestion des jeux
│   │   ├── genres.js                     # Routes pour la gestion des genres
│   │   └── editors.js                    # Routes pour la gestion des éditeurs
│   ├── controllers/
│   │   ├── gamesController.js            # Logique métier pour les jeux
│   │   ├── genresController.js           # Logique métier pour les genres
│   │   └── editorsController.js          # Logique métier pour les éditeurs
│   └── server.js                         # Point d'entrée de l'application
├── .env                                  # Variables d'environnement (URL DB, etc.)
├── .gitignore                            # Fichiers à ignorer par Git
├── README.md                             # Documentation du projet
├── package.json                          # Dépendances Node.js
└── package-lock.json                     # Fichier de verrouillage des dépendances