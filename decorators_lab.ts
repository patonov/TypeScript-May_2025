function LogClass(constructor: Function){
    console.log(constructor);

    console.log('-----------');
    console.log(`Class ${constructor.name} created!`);
    console.log('-----------');
}

@LogClass
class InternetUser {
    name: string;
    age: number;

    private _email!: string;

    constructor(name: string, age: number, email: string){
        this.name = name;
        this.age = age;
        this.email = email;
    }

    get email(){
        return this._email;
    }

    set email(val: string){
        this._email = val;
    }

    getInfo(condensed: boolean): string {
        return condensed ? `Person ${this.name}.` : `Person is ${this.name} is ${this.age} years old with email: ${this.email}.`;
    }
}