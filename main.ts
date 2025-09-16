import {Car} from './Car';

let myCar = new Car("Model S", "Tesla", "Red", 2020, 0, false);
let myOtherCar = new Car("Mustang", "Ford", "Blue", 2018, 0, false);
let randomCar = new Car("Civic", "Honda", "White", 2019, 0, false);

// Affichage du statut initial de la voiture
console.log("----- Avant démarrage -----");
console.log("my car :", myCar.status() );

// Démarrage, accélération et freinage de la voiture
console.log("Démarrage de la voiture...");
myCar.start();
myCar.accelerate(50);
myCar.brake(20);

// Affichage du statut après les actions
console.log("----- Après accélération et freinage -----");
console.log("my car :", myCar.status() );

// Vitesse d'une autre voiture après arrêt
myOtherCar.start();
myOtherCar.accelerate(100);
myOtherCar.stop();
console.log(`My other car is going at ${myOtherCar.speed} km/h after stopping.`);

// Essai d'accélération d'une voiture non démarrée
randomCar.accelerate(100);
