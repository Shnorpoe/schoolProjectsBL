// // // // // // // class Book {
// // // // // // //     constructor(title, author) {
// // // // // // //         this.title = title;
// // // // // // //         this.author = author;
// // // // // // //     }

// // // // // // //     info() {
// // // // // // //         console.log(`Title: ${this.title}, Author: ${this.author}`);
// // // // // // //     }
// // // // // // // }

// // // // // // // class Ebook extends Book {
// // // // // // //     #fileSize;

// // // // // // //     constructor(title, author, fileSize) {
// // // // // // //         super(title, author);
// // // // // // //         this.#fileSize = fileSize;
// // // // // // //     }

// // // // // // //     info() {
// // // // // // //         console.log(`Title: ${this.title}, Author: ${this.author}, File Size: ${this.#fileSize} KB`);
// // // // // // //     }
// // // // // // // }

// // // // // // // const mybuku = new Book('Laskar Pelangi', 'Andrea Hirata');
// // // // // // // mybuku.info();

// // // // // // // const myEbook = new Ebook('Digital Fortress', 'Dan Brown', 512);
// // // // // // // myEbook.info(); 

// // // // // // class HotelRoom {
// // // // // //     #roomNumber;
// // // // // //     #isBooked = false;

// // // // // //     constructor(roomNumber) {
// // // // // //         this.#roomNumber = roomNumber;
// // // // // //     }

// // // // // //     bookRoom() {
// // // // // //         this.#isBooked = true;
// // // // // //         console.log(`Room ${this.#roomNumber} has been booked.`);
// // // // // //     }

// // // // // //     checkStatus() {
// // // // // //         const status = this.#isBooked ? 'booked' : 'available';
// // // // // //         console.log(`Room ${this.#roomNumber} is ${status}.`);
// // // // // //     }
// // // // // // }

// // // // // // const room205 = new HotelRoom(205); 

// // // // // // room205.bookRoom(); // Only book room 205

// // // // // // console.log("\n--- Room Status Report ---");
// // // // // // room205.checkStatus(); 
// // // // // // room310.checkStatus(); 

// // // // // // console.log("\n--- I-komers ---");

// // // // // // class Product {
// // // // // //     constructor(name) {
// // // // // //         this.name = name;
// // // // // //     }

// // // // // //     display() {
// // // // // //         console.log(`Produk: ${this.name}`);
// // // // // //     }
// // // // // // }

// // // // // // class Clothing extends Product {
// // // // // //     constructor(name, size) {
// // // // // //         super(name); 
// // // // // //         this.size = size;
// // // // // //     }


// // // // // //     display() {
// // // // // //         console.log(`Produk: ${this.name}, Ukuran: ${this.size}`);
// // // // // //     }
// // // // // // }

// // // // // // const buku = new Product('Buku Tulis');
// // // // // // const kemeja = new Clothing('Kemeja Flanel', 'L');

// // // // // // // buku.display();
// // // // // // // kemeja.display();

// // // // // // console.log("\n--- Latihan Ticketing ---");

// // // // // // class Ticket {
// // // // // //     constructor(event, price) {
// // // // // //         this.event = event;
// // // // // //         this.price = price;
// // // // // //     }

// // // // // //     printTicket() {
// // // // // //         console.log(`Tiket untuk acara: ${this.event}, Harga: Rp${this.price.toLocaleString('id-ID')}`);
// // // // // //     }
// // // // // // }

// // // // // // class VIPTicket extends Ticket {
// // // // // //     // Override method printTicket dari parent class
// // // // // //     printTicket() {
// // // // // //         console.log(`Tiket untuk acara: ${this.event}, Harga: Rp${this.price.toLocaleString('id-ID')} (VIP)`);
// // // // // //     }
// // // // // // }

// // // // // // // Factory function untuk membuat jenis tiket yang sesuai berdasarkan harga
// // // // // // function createTicket(event, price) {
// // // // // //     if (price > 100000) {
// // // // // //         return new VIPTicket(event, price);
// // // // // //     }
// // // // // //     return new Ticket(event, price);
// // // // // // }

// // // // // // const tiketBiasa = createTicket('Pameran Seni Lokal', 75000);
// // // // // // const tiketVIP = createTicket('Konser Musik Internasional', 250000);

// // // // // // tiketBiasa.printTicket();
// // // // // // tiketVIP.printTicket();

// // // // // class Animal {
// // // // //     #energy = 50; // Properti private untuk energi, default 50.

// // // // //     // Method untuk menambah energi dengan makan
// // // // //     eat(amount) {
// // // // //         this.#energy += amount;
// // // // //         if (this.#energy > 100) {
// // // // //             this.#energy = 100;
// // // // //         }
// // // // //         console.log(`Energi bertambah ${amount}. Energi saat ini: ${this.#energy}`);
// // // // //     }

// // // // //     // Method untuk menambah energi dengan tidur
// // // // //     sleep(time) {
// // // // //         this.#energy += time * 5; // Asumsi tidur 1 jam menambah 5 energi
// // // // //         if (this.#energy > 100) {
// // // // //             this.#energy = 100;
// // // // //         }
// // // // //         console.log(`Tidur selama ${time} jam. Energi saat ini: ${this.#energy}`);
// // // // //     }

// // // // //     // Method untuk mendapatkan status energi saat ini
// // // // //     checkEnergy() {
// // // // //         console.log(`Energi saat ini: ${this.#energy}`);
// // // // //     }
// // // // // }

// // // // // class Dog extends Animal {
// // // // //     // Override method eat untuk menambah energi lebih cepat
// // // // //     eat(amount) {
// // // // //         const newAmount = amount * 1.5; // Dog menambah energi 50% lebih cepat
// // // // //         super.eat(newAmount);
// // // // //         console.log(`(Sebagai Dog) Energi bertambah lebih cepat.`);
// // // // //     }
// // // // // }

// // // // // // Buat objek Dog baru
// // // // // const myDog = new Dog();

// // // // // console.log("--- Status Awal ---");
// // // // // myDog.checkEnergy();

// // // // // console.log("\n--- Aksi: Memberi makan Dog ---");
// // // // // myDog.eat(10); // Menambah energi dengan makan

// // // // // console.log("\n--- Aksi: Dog tidur ---");
// // // // // myDog.sleep(3); // Menambah energi dengan tidur selama 3 jam

// // // // // console.log("\n--- Status Akhir ---");
// // // // // myDog.checkEnergy();

// // // // // console.log("\n--- Latihan Akun Bank ---");

// // // // class Account {
// // // //     #balance;

// // // //     constructor(initialBalance = 0) {
  
// // // //         this.#balance = Math.max(0, initialBalance);
// // // //     }

// // // //     deposit(amount) {
// // // //         if (amount > 0) {
// // // //             this.#balance += amount;
// // // //             console.log(`Deposit sebesar Rp${amount.toLocaleString('id-ID')} berhasil. Saldo baru: Rp${this.#balance.toLocaleString('id-ID')}`);
// // // //         } else {
// // // //             console.log("Jumlah deposit harus positif.");
// // // //         }
// // // //     }

// // // //     withdraw(amount) {
// // // //         if (amount > 0 && this.#balance >= amount) {
// // // //             this.#balance -= amount;
// // // //             console.log(`Penarikan sebesar Rp${amount.toLocaleString('id-ID')} berhasil. Saldo baru: Rp${this.#balance.toLocaleString('id-ID')}`);
// // // //         } else {
// // // //             console.log("Penarikan gagal: jumlah tidak valid atau saldo tidak mencukupi.");
// // // //         }
// // // //     }

// // // //     checkBalance() {
// // // //         console.log(`Saldo saat ini: Rp${this.#balance.toLocaleString('id-ID')}`);
// // // //     }
// // // // }

// // // // class SavingsAccount extends Account {

// // // //     withdraw(amount) {
// // // //         console.log("Penarikan tidak diizinkan dari akun tabungan (Savings Account).");
// // // //     }
// // // // }

// // // // // Contoh Penggunaan
// // // // console.log("--- Akun Biasa ---");
// // // // const regularAcc = new Account(500000);
// // // // regularAcc.checkBalance();
// // // // regularAcc.withdraw(100000);
// // // // regularAcc.withdraw(500000); // Gagal karena saldo tidak cukup setelah penarikan pertama

// // // // console.log("\n--- Akun Tabungan ---");
// // // // const savingsAcc = new SavingsAccount(1000000);
// // // // savingsAcc.checkBalance();
// // // // savingsAcc.deposit(200000);
// // // // savingsAcc.withdraw(50000); // Ditolak oleh method yang di-override
// // // // savingsAcc.checkBalance();

// // // console.log("\n--- Latihan Vehicle ---");

// // // class Vehicle {
// // //     #speed;

// // //     constructor(initialSpeed = 0) {
       
// // //         this.#speed = Math.max(0, Math.min(180, initialSpeed));
// // //     }

// // //     accelerate(amount) {
// // //         const newSpeed = this.#speed + amount;
// // //         this.#speed = Math.min(180, newSpeed); 
// // //         console.log(`Kecepatan bertambah. Kecepatan saat ini: ${this.#speed} km/h`);
// // //     }

// // //     brake(amount) {
// // //         const newSpeed = this.#speed - amount;
// // //         this.#speed = Math.max(0, newSpeed); 
// // //         console.log(`Kecepatan berkurang. Kecepatan saat ini: ${this.#speed} km/h`);
// // //     }

// // //     checkSpeed() {
// // //         console.log(`Kecepatan saat ini: ${this.#speed} km/h`);
// // //     }
// // // }

// // // class Car extends Vehicle {
// // //     // Override method accelerate
// // //     accelerate(amount) {
// // //         console.log("Car accelerating...");
// // //         super.accelerate(amount); 
// // //     }
// // // }

// // // // Contoh Penggunaan
// // // const myCar = new Car();
// // // console.log("Status awal mobil:");
// // // myCar.checkSpeed();

// // // console.log("\nMobil berakselerasi:");
// // // myCar.accelerate(80);

// // // console.log("\nMobil mengerem:");
// // // myCar.brake(30);

// // // console.log("\nMobil berakselerasi hingga batas maksimal:");
// // // myCar.accelerate(200); 

// // // console.log("--- Latihan Employee & Jam Kerja ---");

// // // class Employee {
// // //     #workingHours;

// // //     constructor() {
// // //         this.#workingHours = 0;
// // //     }

// // //     logHours(hours) {
// // //         if (hours > 0) {
// // //             this.#workingHours += hours;
// // //             console.log(`Berhasil mencatat ${hours} jam.`);
// // //         } else {
// // //             console.log("Jam kerja yang dicatat harus bernilai positif.");
// // //         }
// // //     }

// // //     getReport() {
// // //         console.log(`Total jam kerja: ${this.#workingHours} jam.`);
// // //     }
// // // }

// // // class RemoteEmployee extends Employee {
// // //     // Override method logHours
// // //     logHours(hours) {
// // //         if (hours > 8) {
// // //             console.log("Gagal: Melebihi batas kerja harian (Exceeded daily work limit).");
// // //         } else {
// // //             super.logHours(hours); // Memanggil method logHours dari parent class
// // //         }
// // //     }
// // // }

// // // // Contoh Penggunaan
// // // console.log("\n--- Karyawan Remote ---");
// // // const remoteWorker = new RemoteEmployee();
// // // remoteWorker.logHours(7);  // Berhasil
// // // remoteWorker.logHours(9);  // Gagal karena lebih dari 8 jam
// // // remoteWorker.logHours(8);  // Berhasil
// // // remoteWorker.getReport();

// // // console.log("--- Latihan Pesawat & Ketinggian ---");

// // // class Airplane {
// // //     #altitude;

// // //     constructor(initialAltitude = 0) {
// // //         this.#altitude = Math.max(0, Math.min(12000, initialAltitude));
// // //     }

// // //     ascend(meters) {
// // //         if (meters > 0) {
// // //             const newAltitude = this.#altitude + meters;
// // //             this.#altitude = Math.min(12000, newAltitude); 
// // //             console.log(`Naik ${meters} meter. Ketinggian sekarang: ${this.#altitude} meter.`);
// // //         }
// // //     }

// // //     descend(meters) {
// // //         if (meters > 0) {
// // //             const newAltitude = this.#altitude - meters;
// // //             this.#altitude = Math.max(0, newAltitude);
// // //             console.log(`Turun ${meters} meter. Ketinggian sekarang: ${this.#altitude} meter.`);
// // //         }
// // //     }

// // //     checkAltitude() {
// // //         console.log(`Ketinggian saat ini: ${this.#altitude} meter.`);
// // //     }
// // // }

// // // class Jet extends Airplane {
// // //     // Override method ascend
// // //     ascend(meters) {
// // //         console.log("Jet menanjak dengan cepat!");
// // //         
// // //         super.ascend(meters * 2);
// // //     }
// // // }

// // // console.log("\n--- Pesawat Jet ---");
// // // const myJet = new Jet(5000);
// // // console.log("Status awal jet:");
// // // myJet.checkAltitude();

// // // console.log("\nJet menanjak:");
// // // myJet.ascend(2000);

// // // console.log("\nJet turun:");
// // // myJet.descend(1500); 

// // // console.log("\nJet mencoba menanjak melewati batas:");
// // // myJet.ascend(3000); 
// // // myJet.checkAltitude();

// // console.log("--- Latihan Tempat Parkir ---");

// // // Helper class untuk mobil, agar bisa dicek jenisnya
// // class Car {
// //     constructor(name, isElectric = false) {
// //         this.name = name;
// //         this.isElectric = isElectric;
// //     }
// // }

// // class ParkingSpot {
// //     #isOccupied;
// //     #spotNumber;

// //     constructor(spotNumber) {
// //         this.#spotNumber = spotNumber;
// //         this.#isOccupied = false;
// //     }

// //     occupy() {
// //         this.#isOccupied = true;
// //         console.log(`Tempat parkir ${this.#spotNumber} sekarang terisi.`);
// //     }

// //     vacate() {
// //         this.#isOccupied = false;
// //         console.log(`Tempat parkir ${this.#spotNumber} sekarang kosong.`);
// //     }

// //     checkStatus() {
// //         const status = this.#isOccupied ? 'terisi' : 'kosong';
// //         console.log(`Status tempat parkir ${this.#spotNumber}: ${status}.`);
// //     }
// // }

// // class ElectricParkingSpot extends ParkingSpot {
    
// //     occupy(car) {
// //         if (car && car.isElectric) {
// //             console.log("Mobil listrik terdeteksi. Memarkir...");
// //             super.occupy(); 
// //         } else {
// //             console.log("Gagal: Hanya mobil listrik yang diizinkan (Only electric cars allowed).");
// //         }
// //     }
// // }

// // // Contoh Penggunaan
// // console.log("\n--- Tempat Parkir Khusus Mobil Listrik ---");

// // const electricSpotA1 = new ElectricParkingSpot('A1');
// // const electricCar = new Car('Wuling Air EV', true);
// // const regularCar = new Car('Honda Brio');

// // console.log("Status awal:");
// // electricSpotA1.checkStatus();

// // console.log("\n1. Mencoba parkir dengan mobil biasa:");
// // electricSpotA1.occupy(regularCar); 
// // electricSpotA1.checkStatus();

// // console.log("\n2. Mencoba parkir dengan mobil listrik:");
// // electricSpotA1.occupy(electricCar); 
// // electricSpotA1.checkStatus();

// // console.log("\n3. Mengosongkan tempat parkir:");
// // electricSpotA1.vacate();
// // electricSpotA1.checkStatus();

// // console.log("--- Latihan User & Password ---");

// // class User {

// //     #password;

// //     constructor(password) {

// //         this.#password = password;
// //     }

// //     checkPassword(input) {
// //         if (input === this.#password) {
// //             console.log("Benar");
// //         } else {
// //             console.log("Salah");
// //         }
// //     }
// // }

// // // Contoh Penggunaan
// // const user1 = new User("RahasiaNegara123");

// // console.log("Mencoba password yang benar:");
// // user1.checkPassword("RahasiaNegara123"); 

// // console.log("\nMencoba password yang salah:");
// // user1.checkPassword("passwordSalah"); 


// // console.log("--- Latihan Polimorfisme Kendaraan ---");

// // class Vehicle {
// //     move() {
// //         console.log("Kendaraan bergerak");
// //     }
// // }

// // class Car extends Vehicle {
// //     // Override method move dari parent class
// //     move() {
// //         console.log("Mobil berjalan di jalan raya");
// //     }
// // }

// // class Boat extends Vehicle {
// //     // Override method move dari parent class
// //     move() {
// //         console.log("Perahu berlayar di laut");
// //     }
// // }

// // // Contoh Penggunaan
// // const myCar = new Car();
// // const myBoat = new Boat();

// // myCar.move();  // Akan memanggil method move() dari class Car
// // myBoat.move(); // Akan memanggil method move() dari class Boat

// // // Fungsi ini menunjukkan kekuatan polimorfisme
// // function startMovement(vehicle) {
// //     vehicle.move();
// // }

// // console.log("\nMenggunakan fungsi generik:");
// // startMovement(myCar);
// // startMovement(myBoat);

// console.log("--- Latihan Order Status dengan Getter/Setter ---");

// class Order {

//     #status = "Pending";

//     get status() {
//         return this.#status;
//     }


//     set status(newStatus) {
//         if (newStatus === "Delivered" || newStatus === "Cancelled") {
//             this.#status = newStatus;
//             console.log(`Status berhasil diubah menjadi: ${newStatus}`);
//         } else {
//             console.log(`Gagal: Status "${newStatus}" tidak valid.`);
//         }
//     }
// }


// const order1 = new Order();
// console.log(`Status awal: ${order1.status}`);

// console.log("\nMengubah status menjadi 'Delivered':");
// order1.status = "Delivered"; 
// console.log(`Status sekarang: ${order1.status}`); 

// console.log("\nMencoba mengubah status menjadi 'Shipped' (tidak valid):");
// order1.status = "Shipped";
// console.log(`Status sekarang: ${order1.status}`); 

// console.log("\nMengubah status menjadi 'Cancelled':");
// order1.status = "Cancelled";
// console.log(`Status sekarang: ${order1.status}`);

console.log("--- Latihan Akun Bank & Override ---");

class Account {
    #balance = 0;


    get currentBalance() {
        return this.#balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposit Rp${amount.toLocaleString('id-ID')} berhasil.`);
        }
    }

    showBalance() {
        console.log(`Saldo: Rp${this.currentBalance.toLocaleString('id-ID')}`);
    }
}

class PremiumAccount extends Account {

    showBalance() {
        console.log(`Saldo anda adalah: Rp${this.currentBalance.toLocaleString('id-ID')} (Akun Premium)`);
    }
}

// Contoh Penggunaan
console.log("\n--- Akun Biasa ---");
const regularUser = new Account();
regularUser.deposit(150000);
regularUser.showBalance();

console.log("\n--- Akun Premium ---");
const premiumUser = new PremiumAccount();
premiumUser.deposit(500000);
premiumUser.showBalance();
