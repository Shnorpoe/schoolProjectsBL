class Truck {
    constructor(name, model, color, weight) {
        this.name = name;
        this.model = model;
        this.color = color;
        this.weight = weight;
    }

    start() {
        console.log(`The ${this.color} ${this.name} ${this.model} is starting.`);
    }

    drive() {
        console.log(`The ${this.color} ${this.name} ${this.model} is driving.`);
    }
}

let truck1 = new Truck('Volvo', 'FH16', 'White', 18000);
let truck2 = new Truck('Scania', 'R 580', 'Black', 20000);

truck1.start();
truck2.drive();