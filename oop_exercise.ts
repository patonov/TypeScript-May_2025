class demoPerson{
    public firstName: string;
    public lastName: string;
    public age: number;

    constructor(firstName: string, lastName: string, age: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public introduce(): string{
        return `I am ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }
}

class BankAccount{
    private balance: number;

    constructor(balance: number){
        this.balance = balance;
    }

    public deposit(amount: number): void {
        this.balance += amount;
    }

    public withdraw(amount: number): void {
        if(this.balance >= amount){
            this.balance -= amount;
        }
    }

    public getBalance(): number {
        return this.balance;
    }
}

class Vehicle{
    public brand: string;

    constructor(brand: string){
        this.brand = brand;
    }

    public drive(): string{
        return `${this.brand} is driving.`;
    }
}

class Car extends Vehicle {
    public model: string;

    constructor(brand: string, model: string){
        super(brand);
        this.model = model;
    }

    public override drive(): string {
        return `${this.brand} ${this.model} is driving.`;
    }
}