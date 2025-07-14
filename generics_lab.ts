function getFirstParameter<T>(arr: T[]): T {
    return arr[0];
}

const unit = getFirstParameter<number>([33, 22, 16]);
console.log(unit);

function makeTuple<T, U>(el1: T, el2: U): [T, U] {
    return [el1, el2];
}

const tupleMade = makeTuple<string, number>("pencho", 1);
console.log(tupleMade);

interface Messaage<T> {
    sender: string;
    recipient: string;
    data: T;
};

const messageOne: Messaage<string> = {
    sender: "Muncho",
    recipient: "Wuyu",
    data: "call me on my cell phone!",
};

const messageTwo: Messaage<{text: string, timestamp: number}> = {
    sender: 'Waiyu',
    recipient: 'Yuyin',
    data: {text: 'bim bam bum', timestamp: 1001001}
};


function logItemId<T extends { id: number }>(item: T): void {
    console.log(item);
}

logItemId({id: 1, text: 'hahha'});

class StorageBox<T> {
    items: T[] = [];

    constructor(initialItems: T[]){
        this.items = initialItems;
    }

    getAll(): T[] {
        return this.items;
    }

    getFirstElement(): T {
        return this.items[0];
    }

    add(item: T): void {
        this.items.push(item);
    }

    reverse(): void {
        this.items.reverse();
    }

    removeItem(item: T): void {
        const index = this.items.indexOf(item);

        if (index > -1){
            this.items.splice(index, 1);
        }
    }
}

class ApiResponse<T, U> {
    isSuccessful: boolean;
    dataReturned: T | null;
    errorThrown: U | null; 
    
    constructor(isSuccessful: boolean, dataReturned: T | null, errorThrown: U | null) {
        this.isSuccessful = isSuccessful;
        this.dataReturned = dataReturned;
        this.errorThrown = errorThrown;
    }

    getResult(): T {
        if(!this.isSuccessful || this.dataReturned === null){
            throw new Error(String(this.errorThrown));
        }

        return this.dataReturned;
    }
}

type Smoker = {
    id: number;
    name: string;
    email: string;
};

type MakeAllPropertiesOptional<T> = {
    [K in keyof T]?: T[K];
}

type PartialSmoker = MakeAllPropertiesOptional<Smoker>;

type DarkEmployee = {
    id: number;
    name: string;
    age: number;
    city: string;
    salary: number;
};

type Product = {
    title: string;
    price: number;
    inStock: boolean;
    rating: number;
};

type GetNumericTypes<T> = {
    [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];

type EmployeeNumericKeys = GetNumericTypes<DarkEmployee>;
type ProductNumericKeys = GetNumericTypes<Product>;
