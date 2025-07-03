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

interface IAnimal {
    makeSound(): string;
}

class MyDog implements IAnimal {
    makeSound(): string {
        return 'Woof';
    }
}

const myDog = new MyDog();
console.log(myDog.makeSound());

class Message {
    public send(): string {
        return 'I am sending what I am sending...';
    }
}

class EmailMessage extends Message {
    public override send(): string {
        return 'I am sending an E-mail...';
    }
}

class SmsMessage extends Message {
    public override send(): string {
        return 'I am sending a SMS message...';
    }
}

class Employee {
    public name: string;
    protected position: string;
    private salary: number;

    constructor(name: string, position: string, salary: number){
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    public getDetails(): string {
        return `I am ${this.name} and I am working as ${this.position}.`;
    }

    public getSalary(): string {
        return `I have a salary of ${this.salary}. `;
    }
}

class Counter {
    public static count: number = 0;
    public static increment(): void {
        Counter.count++;
    }
    public static getCount(): number {
        return Counter.count;
    }
}

class Book {
    public readonly title: string;
    public readonly author: string;
    constructor(title: string,  author: string){
        this.title = title;
        this.author = author;
    }
}

abstract class Shape {
    public color: string;

    constructor(color: string) {
        this.color = color;
    }

    public abstract getArea(): number;
}

class Circle extends Shape {
    public radius: number;

    constructor(radius: number, color: string){
        super(color);
        this.radius = radius;
    }

    public override getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    public sideA: number;
    public sideB: number;

    constructor(sideA: number, sideB: number, color: string){
        super(color);
        this.sideA = sideA;
        this.sideB = sideB;
    }

    public override getArea(): number {
        return this.sideA * sideB;
    }
}

class GameUser {
    private _username: string;

    constructor(username: string){
        this._username = username;
    }

    get username() {
        return this._username;
    }
    set username(newUserName: string){
        if (NewUserName. length < 3) {
            throw new Error('Bat Mite, tui ne staa!')
        }
        this._username = newUserName;
    }
}

class Task {
    public title: string;
    public description: string;
    public completed: boolean = false;
    private createdBy: string;

    constructor(title: string, description: string, createdBy: string){
        this.title = title;
        this.description = description;
        this._createdBy = createdBy;
    }

    get createdBy(){
        return this._createdBy;
    }

    public toggleStatus(): void {
        this.completed = !this.completed;
    }

    public getDetails(): string {
        return `${this.title} ${this.description} ${this.completed ? 'Completed' : 'Pending'}`;
    }
}













