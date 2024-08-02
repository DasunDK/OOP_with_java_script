


// --- Four-- -

class BankAccount {
    constructor(accntNum, balance) {
        this.accountNum = accntNum;
        this.balance = balance;
        console.log(`Account Number: ${this.accountNum}`);
        console.log(`Balance: Rs.${this.balance}`);
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`\nAmount: Rs.${amount} deposited`);
        console.log(`Current Balance: Rs.${this.balance}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log('\nInsufficient balance');
            console.log(`Requqested Balance: Rs.${amount} > Available Balance: Rs.${this.balance}`);
        } else {
            this.balance -= amount;
            console.log(`\nAmount: Rs.${amount} withdrawn`);
            console.log(`Current Balance: Rs.${this.balance}`);
        }
    }

    checkBalance() {
        console.log(`\nCurrent Balance: Rs.${this.balance}`);
    }
}

// create account(first object/instance)
const account01 = new BankAccount(123456, 1000);

//deposit
account01.deposit(500);

//withdraw
account01.withdraw(20000);

//check balance
account01.checkBalance();







