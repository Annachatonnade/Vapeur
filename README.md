<<<<<<< Updated upstream
=======
### ============================================ **ENGLISH README.md**

   # **Vapeur**

      **Project Vapeur** is a web application inspired by the management of video game collections, much like what **Steam** does, with its name meaning "vapor." Just as steam powers machines, our project aims to be the engine for organizing your games efficiently. With **Vapeur**, users can classify, view, modify, and expand their game collection while navigating a structured and intuitive environment.

      This guide will help you set up the **Vapeur** project using **Express.js** and **Prisma**. Follow these steps to launch the project on your local machine.

   ## **Prerequisites**

      Before you begin, ensure that your environment is set up to use Node.js, Express.js, and Prisma. Follow the instructions below to get everything configured.

   ## **Installing Node.js**

      1. **Download and Install Node.js**:  
         Visit the [official Node.js website](https://nodejs.org/) and download the recommended LTS version. Install Node.js by following the instructions for your operating system.

      2. **Verify Installation**:  
         Once installed, open a terminal and run the following commands to check:  
      
         node -v
         npm -v
         
         These commands should display the versions of **Node.js** and **npm**.

      3. **Common Issues**:  
         If you encounter an error like:  
         
         Cannot load the npm.ps1 file because script execution is disabled...
         
         - Open PowerShell as an administrator.  
         - Enter the following command to allow scripts: Set-ExecutionPolicy RemoteSigned
         - Retry `npm -v`.

   ## **Installing Express.js**

      1. **Clone the Repository & Initialize the Project**:  
         In a directory of your choice, open a terminal and initialize the project:  
         
         git clone https://github.com/your-username/vapeur.git
         cd vapeur
         npm init -y
         

      2. **Install Express.js**:  
         
         npm install express
         

      3. **Start the Server**:  
         
         node server.js
         
         Open a browser and navigate to `http://localhost:3000`.

      4. **Issue with Node.js ?**  
         - If you need to restart the server frequently, install Nodemon to ease development:  
         
         npm install -g nodemon
         nodemon server.js
      
   ## **Installing Prisma**

      1. **Install Prisma CLI**:  
         In your project folder, run:  
         
         npm install prisma @prisma/client sqlite3
         

      2. **Initialize Prisma**:  
         
         npx prisma init
         
         This will generate a `.env` file and a `prisma/` folder.

      3. **Database Setup**:  
         - In the `.env` file, configure your database connection.  
         Example for SQLite:  
         
         DATABASE_URL="file:./dev.db"
         

      4. **Push Schema to Database**:  
         
         npx prisma db push
         

      5. **Generate Prisma Client**:  
         
         npx prisma generate

   ## **Useful Commands**

   | Command                           | Description                                                 |
   |-----------------------------------|-------------------------------------------------------------|
   | `npm init -y`                     | Initialize a Node.js project.                               |
   | `npm install express`             | Install Express.js.                                         |
   | `npm install prisma --save-dev`   | Install Prisma CLI.                                         |
   | `npx prisma init`                 | Initialize Prisma.                                          |
   | `npx prisma db push`              | Sync the Prisma schema with the database.                   |
   | `npx prisma generate`             | Generate the Prisma Client.                                 |
   | `npm install @prisma/client`      | Install Prisma Client.                                      |
   | `node server.js`                  | Start the Express.js server.                                |




### ============================================ FRENCH README.md 

   # **Vapeur**

      **Projet Vapeur** est une application web inspirée par la gestion de collections de jeux vidéo, un peu comme ce que fait **Steam**, dont le nom signifie "vapeur". Tout comme la vapeur est essentielle pour alimenter les machines, notre projet vise à être le moteur d'une organisation optimale de vos jeux. Avec **Vapeur**, chaque utilisateur peut classer, consulter, modifier et enrichir sa collection de jeux tout en naviguant dans un environnement intuitif et structuré.

      Ce guide vous aidera à mettre en place le projet **Vapeur** en utilisant **Express.js** et **Prisma**. Suivez ces étapes pour lancer le projet sur votre machine locale.

   ## **Prérequis**

      Avant de commencer, assurez-vous que votre environnement est configuré pour utiliser Node.js, Express.js et Prisma. Suivez les instructions ci-dessous pour configurer tout cela.

   ## **Installation de Node.js**

      1. **Télécharger et installer Node.js** :  
         Rendez-vous sur le [site officiel de Node.js](https://nodejs.org/) et téléchargez la version LTS (recommandée). Installez Node.js en suivant les instructions pour votre système d’exploitation.

      2. **Vérifier l’installation** :  
         Une fois installé, ouvrez un terminal et exécutez les commandes suivantes pour vérifier : 

            node -v
            npm -v
      
         Cela devrait afficher les versions de **Node.js** et **npm**.

      3. **Problèmes fréquents** :  
         Si vous obtenez une erreur comme : Impossible de charger le fichier npm.ps1, car l’exécution de scripts est désactivée...
         
            - Ouvrez PowerShell en mode administrateur.  
            - Tapez la commande suivante pour autoriser les scripts : Set-ExecutionPolicy RemoteSigned
            - Réessayez `npm -v`.

   ## **Installation d’Express.js**

      1. **Cloner le dépôt & Créer le projet** :  
         Dans un dossier de votre choix, ouvrez un terminal et initialisez un projet Node.js :  
     
            git clone https://github.com/your-username/vapeur.git
            cd vapeur
            npm init -y

      2. **Installer Express.js** :  

         npm install express

      3. **Lancer le serveur** :  
   
         node server.js
         
         Ouvrez un navigateur et allez sur `http://localhost:3000`.

      5. **Problème avec Node.js ?**  
         - Si vous devez redémarrer souvent le serveur, installez Nodemon pour faciliter le développement :  

         npm install -g nodemon
         nodemon server.js

   ## **Installation de Prisma**

      1. **Installer Prisma CLI** :  
         Dans le dossier de votre projet, exécutez :  

         npm install prisma @prisma/client sqlite3


      2. **Initialiser Prisma** :  
      
         npx prisma init
  
         Cela génère un fichier `.env` et un dossier `prisma/`.


   ## **Commandes utiles**

   | Commande                          | Description                                                 |
   |-----------------------------------|-------------------------------------------------------------|
   | `npm init -y`                     | Initialiser un projet Node.js.                              |
   | `npm install express`             | Installer Express.js.                                       |
   | `npm install prisma --save-dev`   | Installer Prisma CLI.                                       |
   | `npx prisma init`                 | Initialiser Prisma.                                         |
   | `npx prisma db push`              | Synchroniser le schéma Prisma avec la base de données.      |
   | `npx prisma generate`             | Générer le client Prisma.                                   |
   | `npm install @prisma/client`      | Installer Prisma Client.                                    |
   | `node server.js`                  | Lancer le serveur Express.js.                               |




>>>>>>> Stashed changes

