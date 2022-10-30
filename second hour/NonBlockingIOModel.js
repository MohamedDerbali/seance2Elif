//javascript utilise la notion des prototypes, il va considerer le fichier javascript en tant que module et va creer un objet global
//c'est pour cela on n'a pas besoin de faire la déclaration du fonction cookAndDeliverFood avant de l'appeler

function placeAnOrder(orderNumber) {
    //affichage des commandes
    console.log("Customer order:", orderNumber);
    //callback va remplacer la fonction ci-dessous
    cookAndDeliverFood(function () {
        console.log("Delivered food order:", orderNumber);
    });
}
function cookAndDeliverFood(callback) {
    setTimeout(callback, 5000);
}
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);

// on a exporter tout le fichier en tant que module
module.exports = placeAnOrder;