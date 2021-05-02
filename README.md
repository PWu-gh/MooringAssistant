# MooringAssistant : Smart Anchor

## Pour tester l'application sur  `Expo GO`, dowloadable on iOS and Android:
- scannez le QR code sur : https://expo.io/@pwu_dev/projects/MooringA

Attention! Pour pouvoir le tester sur iOS il faut y être invité dans la Team expo.



## Pour cloner le projet sur votre ordinateur :
- Installez nodeJS
- Installez expo-cli : ``npm install expo-cli``
- Téléchargez le projet : ``git clone https://github.com/PWu-gh/MooringAssistant.git`` 
- Dans le dossier /MooringAssistant:
    - Installez les dépendances avec : ``npm install`` 
    - lancez un émulateur Android ou iOS
    - lancez l'application : ``expo start``




TO DO: add computer vision to the Camera Component and add it to the CVision file.

## Les différents onglets de l'application

### Page d'accueil
Lorsque nous arrivons sur la page d'accueil, nous pouvons :
- voir l'historique
- continuer une manoeuvre précédemment commencé. ( si possible)
- créer une nouvelle configuration

### Page de configuration
Sur la page de configuration nous pouvons:
- définir la profondeur des eaux
- définir le ratio de la longueur qu'on veut déployer par rapport à la profondeur des eaux
- définir le calibrage, soit la longueur de la chaine déployé pour un tour entier de guindeau
- définir une longueur déjà déployé ( utile pour pouvoir reprendre des données de quelqu'un)

### Page du Computer vision
Sur cette page l'utilisateur doit pouvoir utiliser la caméra du smartphone afin de compter le nombre de tours que fait le guindeau.
La mesure commence lorsque l'utilisateur appuie sur le bouton start.
Une jauge progresse en même temps que la longueur déployé augmente.

### Page d'historique
Permet d'afficher l'historique des 20 dernières configurations., Une configuration est sauvegardée lorsque l'utilisateur qsuitte l'application.




## Base de donnée locale / Historique

Une base de donnée locale est mise en place pour sauvegarder les données lorsque l'utiisateur quitte l'application.

Async Storage sera utilisé pour sauvegarder des données.

| profondeur    | ratio         | calibrage     | deploy        | ctime (PK)    |cdate  (PK)    |
| ------------- |:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|
| -             | -             | -             | -             | -             | -             |
| -             | -             | -             | -             | -             | -             |
