//step1: text sur le navigateur

// const http = require('http');
// const server = http.createServer((req, res) => {
//   res.writeHead(200);
//   res.end('Hello Elif Kef');
// });
// server.listen(3000, () => console.log('Server running on port 3000'));

//step2: afficher un fichier html

// const http = require('http');
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.end('<h1 style="color:red">Hello Elif Kef</h1>');
// });
// server.listen(3000, () => console.log('Server running on port 3000'));

//step3: afficher un fichier html

// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/html"});
//     res.write('<!DOCTYPE html>'+
//     '<html>'+
//     '<head>'+
//     '<meta charset="utf-8" />'+
//     '<title>Ma page Node.js !</title>'+
//     '</head>'+
//     '<body>'+
//     '<p>Voici un paragraphe <strong>HTML</strong> !</p>'+
//     '</body>'+
//     '</htm1>');
//     res.end();
// });
// server.listen(3000, () => console.log('Server running on port 3000'));

//step4: afficher un fichier html

// const http = require("http");
// const url = require("url");
// const server = http.createServer((req, res) => {
//   var page = url.parse(req.url).pathname;
//   console.log(page);
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   if (page == "/") {
//     res.write("Vous etes a l'accueil, comment on peut vous aidez?");
//   } else if (page == "/elif") {
//     res.write("Vous etes le bienvenue chez elif");
//   } else if (page == "/salle/yoghorta") {
//     res.write("Vous êtes dans la salle yoghourta");
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.write("Page introuvable !");
//   }
//   res.end();
// });
// server.listen(3000, () => console.log("Server running on port 3000"));


//step5: afficher un fichier html
//npm i querystring
//npm i url
//npm i http
//link : http://localhost:3000/mapage?id=3008&login=web
const http = require('http');
const url = require('url');
const queryString = require('querystring');
const server = http.createServer((req, res) => {
    var params = queryString.parse(url.parse(req.url).query);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if('id' in params && 'login' in params) {
    res.write('id: ' + params['id'] + ' login: ' + params['login']);
  }
  else {
    res.write('Vous devez bien avoir un identifiant et un login non ?');
  }
  res.end();
});
server.listen(3000, () => console.log('Server running on port 3000'));
