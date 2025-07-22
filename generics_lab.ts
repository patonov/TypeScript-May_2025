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

function swap<T>(a: T[], aIndex: number, b: T[], bIndex: number): void {
    const temp = a[aIndex];

    a[aIndex] = b[bIndex];
    b[bIndex] = temp;
};

type BaseCar = {
    engine: {
        horsepower: number;
    };
    tyres: {
        model: string;
        airPressure: number;
    };
    body: {
        material: string;
    };
};

class Mechanic<T extends BaseCar> {
    technicalInspection(car: T): boolean { 
        return true; 
    }
};

interface CountableSet<T> {
    add(item:T): void;
    remove(item: T): void;
    contains(item: T): boolean;
    getNumberOfCopies(item: T): number;
};

class CountedSet<T> implements CountableSet<T> {
    private items: Map<T, number> = new Map();

    add(item: T): void {
        const currentCount = this.items.get(item);

        if(currentCount){
            this.items.set(item, currentCount + 1);
        } else {
            this.items.set(item, 1);
        }
    }

    remove(item: T): void {
        const currentCount = this.items.get(item);

        if(currentCount) {
            this.items.set(item, currentCount - 1);
        }
    }

    contains(item: T): boolean {
        const currentCount = this.items.get(item);

        return currentCount !== undefined && currentCount > 0;
    }

    getNumberOfCopies(item: T): number {
        return this.items.get(item) ?? 0;
    }
}

type InputParamType<T> = T extends number ? number : string;

function conditionalNumber<T>(value: InputParamType<T>): void {
    if (typeof value === 'number'){
        console.log(value.toFixed(2));
    } else {
        console.log(value);
    }
};

enum LoggingLevel {
    Info = "Info",
    Error = "Error",
    Warning = "Warning",
    Debug = "Debug",
};

enum LoggingFormat {
    Standard = "[%level][%date] %text",
    Minimal = "*%level* %text"
};

interface CachingLogger<T extends LoggingLevel, V extends LoggingFormat> {
    cachedLogs: Map<T, string[]>
    log(logLevel: T, message: string): void;
    getFormat(): V
};

class Logger<T extends LoggingLevel, V extends LoggingFormat> implements CachingLogger<T, V> {
    cachedLogs: Map<T, string[]> = new Map();
    private format: V;

    constructor(format: V){
        this.format = format;
    }

    log(logLevel: T, message: string): void {
        const date = new Date().toISOString();

        const filledMessage = this.format.replace('%level', logLevel).replace('%date', date).replace('%text', message);
        console.log(filledMessage);

        const currentMessages = this.cachedLogs.get(logLevel);

        if(currentMessages) {
            currentMessages.push(filledMessage);
            this.cachedLogs.set(logLevel, currentMessages);
        } else {
            this.cachedLogs.set(logLevel, [filledMessage]);
        }
    }

    getFormat(): V {
        return this.format;
    }
};

let logger = new Logger<LoggingLevel, LoggingFormat>(LoggingFormat.Standard);
logger.log(LoggingLevel.Info, "This is an info message.");
logger.log(LoggingLevel.Info, "Another message.");
logger.log(LoggingLevel.Error, "Something went wrong.");
logger.log(LoggingLevel.Warning, "Be careful with the type assertions.");
logger.log(LoggingLevel.Debug, "Running the debugger.");
console.log('-----------')
console.log([...logger.cachedLogs.entries()].map(x => x[1].join('\n')).join('\n'));

type Choose<T, K extends keyof T> = {
    [Key in K]: T[Key];
}

type test = {
    name: string,
    age: number,

    test:() => string;
}

type extracted = Choose<test, 'name' | 'age'>;

type anotherType = {
    time: Date,
    duration: number,

    test: () => string,

    val: 200 | 300,
    user: { name: string, age: number } 
} 

type nestedUserAndTime = 'user' | 'time';
type extracted2 = Choose<anotherType, nestedUserAndTime>;