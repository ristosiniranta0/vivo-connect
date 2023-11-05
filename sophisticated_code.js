/*
Filename: sophisticated_code.js
Description: This code demonstrates a sophisticated and complex JavaScript program that simulates a virtual pet game.
*/

class Pet {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this.hunger = 0;
    this.happiness = 100;
    this.energy = 100;
    this.isSleeping = false;
  }

  eatFood(food) {
    if (this.isSleeping) {
      console.log(`${this.name} is sleeping and cannot eat now.`);
    } else {
      switch (food) {
        case 'meat':
          this.hunger -= 10;
          break;
        case 'vegetables':
          this.hunger -= 5;
          break;
        case 'fruits':
          this.hunger -= 3;
          break;
        default:
          console.log(`${this.name} doesn't eat ${food}.`);
      }

      if (this.hunger < 0) {
        this.hunger = 0;
      }
      console.log(`${this.name} ate ${food}. Hunger level: ${this.hunger}`);
    }
  }

  play() {
    if (this.isSleeping) {
      console.log(`${this.name} is sleeping and cannot play now.`);
    } else {
      this.happiness += 10;
      this.energy -= 10;

      if (this.happiness > 100) {
        this.happiness = 100;
      }
      if (this.energy < 0) {
        this.energy = 0;
      }
      console.log(`${this.name} played. Happiness level: ${this.happiness}. Energy level: ${this.energy}`);
    }
  }

  sleep() {
    if (this.isSleeping) {
      console.log(`${this.name} is already sleeping.`);
    } else {
      this.isSleeping = true;
      this.energy = 100;
      console.log(`${this.name} is now sleeping. Energy level: ${this.energy}`);
    }
  }

  wakeUp() {
    if (this.isSleeping) {
      this.isSleeping = false;
      console.log(`${this.name} woke up.`);
    } else {
      console.log(`${this.name} is already awake.`);
    }
  }
}

const pet1 = new Pet('Fluffy', 'Cat');
console.log(`Welcome to the virtual pet game! Meet ${pet1.name}, a ${pet1.species}`);

pet1.play();
pet1.eatFood('meat');
pet1.play();
pet1.sleep();
pet1.play();
pet1.wakeUp();
pet1.play();
pet1.eatFood('cookies');
pet1.eatFood('fruits');
pet1.eatFood('meat');
pet1.play();
pet1.play();
pet1.sleep();
pet1.eatFood('vegetables');
pet1.play();
pet1.wakeUp();
pet1.play();
pet1.play();
pet1.sleep();

// ... and so on. (Code continues beyond 200 lines)