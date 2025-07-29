//Decorator for a class

function LogClass(constructor: Function){
    console.log(constructor);

    console.log('-----------');
    console.log(`Class ${constructor.name} created!`);
    console.log('-----------');
}

//Accessor decorator

function LogAccessor(target: any, propertyName: string, descriptor: PropertyDescriptor){
    console.log('-----------');
    console.log(`${propertyName} was accessed!`);
    console.log('-----------');
}

//Method decorator

function LogMethod(target: any, methodName: string, descriptor: PropertyDescriptor){
    console.log('-----------');
    console.log(descriptor.value);
    console.log('-----------');
}

//Property decorator

function LogProperty(target: any, propertyName: string){
    console.log('-----------');
    console.log(`Prroperty ${propertyName} was created.`);
    console.log('-----------');
}

@LogClass
class InternetUser {
    @LogProperty
    name: string;
    age: number;

    private _email!: string;

    constructor(name: string, age: number, email: string){
        this.name = name;
        this.age = age;
        this.email = email;
    }

    @LogAccessor
    get email(){
        return this._email;
    }

    set email(val: string){
        this._email = val;
    }

    @LogMethod
    getInfo(condensed: boolean): string {
        return condensed ? `Person ${this.name}.` : `Person is ${this.name} is ${this.age} years old with email: ${this.email}.`;
    }
}

@LogClass
class MiningEmployee {
    name: string = 'Muncho';
    salary: number = 970.00;
}


