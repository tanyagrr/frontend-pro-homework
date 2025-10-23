class BankAccount {
    #balance;
    constructor(balance) {
        this.#balance = balance;
    }

    getBalance() {
        return this.#balance;
    }

    deposit(sum) {
        return this.#balance += sum;
    }

    withdraw(sum) {
        if (this.#balance < sum) {
            return "Insufficient funds";
        }
        return this.#balance -= sum;
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance());

account1.deposit(500);

console.log(account1.getBalance());

account1.withdraw(200);

console.log(account1.getBalance());