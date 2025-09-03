// class Animal {
//     constructor() {
//         if (new.target === Animal) {
//         throw new Error("Abstract classes cannot be instantiated.");
//       }
//     }

//     makeSound(){
//         throw new Error("Must implement at subclass.")
//     }
// }

// class cog extends Animal{
//     makeSound() {
//         return "wiau";
//     }
// }

// class dat extends Animal{
//     makeSound() {
//         return "miouf";
//     }

// }

// let c = new cog();
// console.log(c.makeSound());

// let d = new Animal();
// console.log(d.makeSound());
    
class Engine {
    start() {
        console.log("Engine started.");
    }
}

class GPS {
    navigation() {
        console.log("GPS navigation enabled.");
    }
}


class Passat {
    constructor() {
        this.engine = new Engine();
        this.gps = new GPS()
    }
drive(){
    this.engine.start();
    console.log("Passat is moving.");
}
}

let p = new Passat();
p.drive();
p.gps.navigation();
