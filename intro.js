class Student {
  constructor(name, nim, year) {
    this.name = name;
    this.nim = nim;
    this.year = year;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}, my NIM is ${this.nim}, and I am from the class of ${this.year}.`);
  }

  isSenior() {
    const senior = Number(this.year) < 2025;
    if (senior) {
      console.log(`${this.name} is a senior.`);
    }
    else {
      console.log(`${this.name} is not a senior.`);
    }
    return senior;
  }
}

let student1 = new Student('girbal', '123456', 2023);
let student2 = new Student('savic', '654321', 2025);
student1.introduce();
student2.introduce();
student1.isSenior();
student2.isSenior();