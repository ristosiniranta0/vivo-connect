/* 
Filename: ComplexApplication.js
Content: A complex application demonstrating various concepts and functionalities
*/

// Define a class to represent a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Define a class to represent a car
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  getFullModel() {
    return `${this.brand} ${this.model}`;
  }

  static isValidYear(year) {
    return year > 1900 && year <= new Date().getFullYear();
  }
}

// Create instances of Person
const person1 = new Person("John", 25);
const person2 = new Person("Jane", 30);

// Create instances of Car
const car1 = new Car("Tesla", "Model 3", 2021);
const car2 = new Car("Ford", "Mustang", 2019);

// Access properties and call methods
console.log(person1.name); // Output: John
console.log(car2.getFullModel()); // Output: Ford Mustang

// Check if a car year is valid
console.log(Car.isValidYear(2022)); // Output: false

// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Child class inheriting from Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  sound() {
    console.log(`${this.name} barks!`);
  }

  static getBreedInfo(breed) {
    console.log(`Breed info for ${breed}`);
  }
}

// Create instances of Dog
const dog1 = new Dog("Buddy", "Golden Retriever");
const dog2 = new Dog("Max", "German Shepherd");

// Call inherited and static methods
dog1.sound(); // Output: Buddy barks!
Dog.getBreedInfo("Labrador"); // Output: Breed info for Labrador

// Use array methods
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum); // Output: 15

// Use arrow functions
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // Output: 12

// Use object destructuring
const { name, age } = person1;
console.log(name, age); // Output: John 25

// Create a promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() < 0.5;
    success ? resolve("Success!") : reject("Failure!");
  }, 2000);
});

// Handle promise resolution
promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// Create a generator function
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2
console.log(gen.next().value); // Output: 3

// ... continue with more complex code ...