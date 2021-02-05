// class Dog {
//   constructor(name, breed) {
//     this.name = name;
//     this.breed = breed;
//     this.isGoodBoy = true;
//   }
//   sit() {
//     // sitting code goes here
//   }
//   fetch() {
//     // fetching code goes here
//   }
// }
// // create an instance of the Dog class
// const fluffy = new Dog("Fluffy", "Toy Poodle");

class Traveler {
  constructor(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
  }
  hunt() {
    this.food += 2;
  }
  eat() {
    if (this.food >= 1) {
      this.food -= 1;
    } else if (this.food <= 0) {
      this.isHealthy = false;
    } else {
      this.isHealthy = false;
    }
  }
}

class Wagon {
  constructor(capacity) {
    this.capacity = capacity;
    this.passengers = [];
  }
  getAvailableSeatCount() {
    let availableSeats = 0;

    availableSeats = this.capacity;
    return availableSeats;
  }
  join(traveler) {
    if (this.capacity >= 1) {
      this.passengers.push(traveler);
      this.capacity -= 1;
    } else {
      console.log("no more room");
    }
  }
  shouldQuarantine() {
    for (let i = 0; this.passengers.length > i; i++) {
      console.log(this.passengers[i]);
      if (this.passengers[i].isHealthy === false) {
        return true;
      }
    }
  }
  totalFood() {
    let fTotal = 0;
    for (let i = 0; this.passengers.length > i; i++) {
      if (this.passengers[i].food > 0) {
        fTotal = fTotal + this.passengers[i].food;
      }
    }
    return fTotal;
  }
}
