// 5.1 Spread med objekt (2p)
// Skriv klart funktionen addIsFast som tar ett bil-objekt och returnerar en kopia
// av objektet och dessutom lägger till egenskapen isFast på det nya objektet.
// Om speed är över 100 ska isFast vara true annars ska det vara false

const car = {
  name: "Volvo",
  speed: 120,
};

function addIsFast(car) {
  // Din kod här
  this.name = "name";
  this.speed = "speed";

  let newCar = {
    name: this.name,
    speed: this.speed,
    isFast: this.isFast,
  };
  if (speed > 120) {
    addIsFast.isNew = true;
  } else {
    addIsFast.isNew = false;
  }
}
let newCar = new addIsFast("Kia", 120);
console.log(addIsFast(car)); // Ska logga { name: "Volvo", speed: 120, isFast: true }

// 5.2  Spread med arrayer (2p)
// Skapa en funktion 'combineArrays' som tar emot två arrayer som argument
// och använder spread operatorn för att kombinera dem till en enda array.
// Returnera den nya arrayen

function combineArrays(arr1, arr2) {
  // Din kod här
}

console.log(combineArrays([1, 2, 3], [4, 5, 6])); // Ska logga [1, 2, 3, 4, 5, 6]
