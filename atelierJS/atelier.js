var stock = [];

const addToStock = (produit) => {
  stock.push(produit);
};

const printStock = () => {
  console.log(stock);
};

const removeFromStock = (index) => {
    if (index > -1) {
        stock.splice(index, 1);
    }
    else{
        console.log("Produit inexistant!");
    }
};

const sortStock = () => {
  stock.sort((a, b) => {
    return a.price - b.price;
  });
  console.log("Stock trié: \n", stock);
};

const printMenu = () => {
  console.log("Bienvenue dans l'atelier de création de produits\n");
  console.log("1. Ajouter un produit\n");
  console.log("2. Supprimer un produit\n");
  console.log("3. Afficher le stock\n");
  console.log("4. Trier le stock\n");
  console.log("5. Quitter\n");
};

const prompt = require("prompt-sync")({ sigint: true });
printMenu();
let choice;
do {
  choice = prompt("Enter your choice:");
  console.log(choice);
  console.log("processing choice...\n");
  printMenu();
  switch(true){
    case choice == 1:
        addToStock({name: 'produit1', inStock: true, price:800});
        addToStock({name: 'produit2', inStock: true, price:550});
        addToStock({name: 'produit3', inStock: false, price:100});
        addToStock({name: 'produit4', inStock: false, price:950});
        console.log("\nProduits ajoutés au stock\n", stock);
    break;
    case choice == 2:
        removeFromStock(1);
        console.log("\nProduits dans le stock\n", stock);
    break;
    case choice == 3:
        printStock();
    break;
    case choice == 4:
        sortStock();
    break;
  }
} while (choice != 5);
