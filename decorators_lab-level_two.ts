function FreezeClass(constructor: Function){
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}

function ValidateStringAccessor(target: any, propertyName: string, descriptor: PropertyDescriptor){
    const originalSetter = descriptor.set;

    descriptor.set = function(val: string){
        if(val.length < 3){
            throw new Error('You are not right. Give three characters.')
        }
        originalSetter?.call(this, val);
    }
    return descriptor;
}


//@FreezeClass
class NetworkUser {
    name: string;
    age: number;

    private _email!: string;

    constructor(name: string, age: number, email: string){
        this.name = name;
        this.age = age;
        this.email = email;
    }

    @ValidateStringAccessor
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

const penchoUsera = new NetworkUser('pencho', 18, 'pencho@abv.bg');
//penchoUsera.email = 'o';
//console.log(Object.isFrozen(NetworkUser));
//console.log(Object.isFrozen(NetworkUser.prototype));