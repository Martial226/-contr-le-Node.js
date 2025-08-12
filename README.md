 Point de contrôle Node.js
Ce projet contient plusieurs petits programmes pour découvrir Node.js à travers des exercices pratiques.

 Structure du projet :

hello-world.js : Affiche "HELLO WORLD" dans la console

server.js : Crée un serveur HTTP sur le port 3000

file-system.js : Crée et lit un fichier welcome.txt

password-generator.js : Génère un mot de passe aléatoire

email-sender.js : Envoie un email avec Nodemailer

welcome.txt : Fichier créé automatiquement par file-system.js

1 Afficher "HELLO WORLD"
Fichier : hello-world.js
Commande pour exécuter :
node hello-world.js

2 Créer un serveur
Fichier : server.js
Lance le serveur avec :
node server.js
Puis ouvre ton navigateur à l’adresse : http://localhost:3000

3 Écrire et lire un fichier
Fichier : file-system.js
Commande pour exécuter :
node file-system.js
Cela crée welcome.txt avec le texte "Hello Node" et l’affiche dans la console.

4 Générer un mot de passe
Installation du module :

csharp
Copier
Modifier
npm init -y
npm install generate-password
Fichier : password-generator.js
Commande pour exécuter :
node password-generator.js

5 Envoyer un email
Installation du module :
npm install nodemailer
Fichier : email-sender.js
Commande pour exécuter :
node email-sender.js

 Modules utilisés :

generate-password → génération de mots de passe

nodemailer → envoi d’emails

 Auteur :
SHORGO PALIGWENDE MARTIAL
