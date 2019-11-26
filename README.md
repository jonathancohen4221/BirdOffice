# BirdOffice

## Installer le Projet en Local

Le projet a été installé avec **[Yeoman](https://yeoman.io/)**, un outil qui permet de démarrer un projet rapidement, de façon personnalisée et , dans mon cas, avec un service de serveur de développement, de compilation/minification des assets.

 - **Cloner le projet** : `git@github.com:jonathancohen4221/BirdOffice.git`
 
 - **Installer les paquets et leurs dépendances :** `npm install` (si npm n'est pas installé : [https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm)). Tout devrait s'installer mais si vous rencontrez des problèmes : 
     - **Si Gulp ne s'est pas installé sur la machine:** Vérifier que node et npm installé puis lancer la commande : `npm install --global gulp-cli`[( https://gulpjs.com/docs/en/getting-started/quick-start](https://gulpjs.com/docs/en/getting-started/quick-start)) afin d'installer gulp en global sur la machine.
     
     - **Si SASS ne s'est pas installé sur la machine**: `npm install -g sass`.
 - **Lancer le projet en local avec la commande** : `gulp serve`.
 - **Au cas où : Se mettre sur la branche master**: `git checkout master`.
 - **Pour mettre en production** : lancer la commande `gulp build` qui va minifier les fichiers javascript et css et compresser les images.
 
  - **Concernant le projet** : Il a été fait en VueJS meme s'il manque quelques features comme le routing. L'incrementation du panier a été faite. Les data sont récupérées en JS.

