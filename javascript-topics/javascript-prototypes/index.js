const { ObjectFlags } = require("typescript");

const person = {
  alive: true,
};

const musician = {
  plays: true,
};
Object.setPrototypeOf(musician, person);
//   console.log(Object.getPrototypeOf(musician));
//   console.log(Object.getPrototypeOf(musician));
//   console.log(musician.__proto__);
//   console.log(Object.getPrototypeOf(musician)===musician.__proto__);
// console.log(musician.plays);
// console.log(musician.alive);

// const guitarist = {
//   string: 6,
//   __proto__: musician,
// };
// console.log(guitarist.alive);
// console.log(guitarist.plays);
// console.log(guitarist.string);

// No circular references allowed(person.__proto__ can't be guitarist)
// The __proto__ value must be an object or null.
// An object can directly inherit from one object.

// objects with getter and setter methods
const cars = {
  doors: 2,
  seats: "vinyl",
  get seatMaterial() {
    return this.seats;
  },
  set seatMaterial(material) {
    this.seats = material;
  },
};

const luxuryCar = {};
Object.setPrototypeOf(luxuryCar, cars);
luxuryCar.seatMaterial = "Leather";
console.log(luxuryCar);
console.log(luxuryCar.doors);
console.log(cars);

// walking up the chain-props and objects are not copied

console.log(luxuryCar.valueOf());