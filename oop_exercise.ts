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