// // // // class Animal {
// // // //   speak() {
// // // //     console.log("The animal makes a sound");
// // // //   }
// // // // }

// // // // class Dog extends Animal {
// // // //   speak() {
// // // //     console.log("The dog barks");
// // // //   }
// // // // }

// // // // const d = new Dog();
// // // // d.speak();

// // // class BankAccount {
// // //   constructor() {
// // //     this._balance = 0;
// // //   }

// // //   deposit(amount) {
// // //     this._balance += amount;
// // //   }

// // //   showBalance() {
// // //     console.log(`Current balance: $${this._balance}`);
// // //   }
// // // }

// // // const account = new BankAccount();
// // // account.deposit(100);
// // // account.showBalance();

// // // account._balance = 200; // This will not affect the original account balance
// // // account.showBalance();

// // class secureBankAccount {
// //     #balance = 0;

// //     deposit(amount) {
// //         this.#balance += amount;
// //     }

// //     showBalance() {
// //         console.log(`Current balance: $${this.#balance}`);
// //     }
// // }

// // const secureAccount = new secureBankAccount();
// // secureAccount.deposit(100);
// // .. secureAccount_.#balance = 200;
// // secureAccount.showBalance(); 

// class message {
//   send() {
//     console.log("Message sent");
//   }
// }

// class email extends message {
//   send() {
//     console.log("email sent");
//   }
// }

// class sms extends message {
//   send() {
//     console.log("sms sent");
//   }
// }

// const emailMessage = new email();
// emailMessage.send();

// const smsMessage = new sms();
// smsMessage.send();

// const mesmessage = new message();
// mesmessage.send();

class User {
  #password;
    constructor(password) {
    this.#password = password;
    }

  checkPassword(password) {
    if (password === this.#password) {
      console.log("Password is correct");
    } else {
      console.log("Password is incorrect");
    }
  }
}
const passwordUser = new User("mySecretPassword");
passwordUser.checkPassword("mySecretPassword");
passwordUser.checkPassword("wrongPassword");
