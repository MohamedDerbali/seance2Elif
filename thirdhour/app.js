//steps
//1. npm init pour créer le fichier package.json
//2. npm install events pour installer le module events
//-> package-lock.json est créé -> fixation des version selon la version du node js et npm installé
//3. créer le fichier app.js
//4. pour lancer l'application il suffit d'ajouter dans la partie script la commande start pour lancer le fichier app.js
// ou bien vous pouvez le lancer directement avec la commande node app.js

const EventEmitter = require('events');
const emitter = new EventEmitter();

//register a listener
emitter.on('messageLogged', function(){
    console.log('Listener called');
});

emitter.on('sayHelloToTheClass', function(){
    console.log('Hello Elif Kef');
});

//raise an event
emitter.emit('messageLogged');
emitter.emit('sayHelloToTheClass');