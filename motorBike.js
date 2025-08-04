class Bike {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`The ${this.year} ${this.brand} ${this.model} is starting.`);
    }

    drive() {
        console.log(`The ${this.year} ${this.brand} ${this.model} is driving.`);
    }
}

let bike1 = new Bike('Yamaha', 'MT-07', 2020);
let bike2 = new Bike('Kawasaki', 'Ninja 650', 2021);
bike1.start();
bike2.drive();