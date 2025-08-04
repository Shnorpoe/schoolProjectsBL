// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   sound() {
//     console.log(`${this.name} is making a sound.`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//   }
//   bark() {
//     console.log(`${this.name} the ${this.breed} says woof.`);
//   }
// }

// class Bird extends Animal {
//   constructor(name, species) {
//     super(name);
//     this.species = species;
//   }
//   fly() {
//     console.log(`${this.name} the ${this.species} is flying.`);
//   }
// }

// const myDog = new Dog('Pravdesh', 'Greyhound');
// const myBird = new Bird('Mohit', 'Canary');

// myDog.sound();
// myDog.bark();

// myBird.sound();
// myBird.fly();

class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}

class Manager extends Employee {
  constructor(name, position, salary, department) {
    super(name, position, salary);
    this.department = department;
  }
  methodLeader() {
    console.log(`${this.name} the ${this.position} is leading the ${this.department} department with a salary of ${this.salary} per month.`);
  }
}

const manager1 = new Manager('osas', 'Manager', 5000, 'Sales');
manager1.methodLeader();