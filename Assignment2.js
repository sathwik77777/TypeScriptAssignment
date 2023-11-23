var BankAccount = /** @class */ (function () {
    function BankAccount(depositorName, accountNumber, accountType, initialBalance) {
        this.depositorName = depositorName;
        this.accountNumber = accountNumber;
        this.accountType = accountType;
        this.balance = initialBalance;
    }
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("Deposit of ".concat(amount, " successful. New balance: ").concat(this.balance));
        }
        else {
            console.log("Invalid deposit amount. Please enter a positive amount.");
        }
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance -= amount;
                console.log("Withdrawal of ".concat(amount, " successful. New balance: ").concat(this.balance));
            }
            else {
                console.log("Insufficient funds.");
            }
        }
        else {
            console.log("Invalid withdrawal amount. Please enter a positive amount.");
        }
    };
    BankAccount.prototype.display = function () {
        console.log("Account Holder: ".concat(this.depositorName));
        console.log("Account Number: ".concat(this.accountNumber));
        console.log("Account Type: ".concat(this.accountType));
        console.log("Current Balance: ".concat(this.balance));
    };
    return BankAccount;
}());
var account1 = new BankAccount("Sathwik", "998712647", "Savings", 100);
account1.display();
account1.deposit(1000);
account1.withdraw(500);
account1.display();
