let passFailInfo: "pass" | "fail";
passFailInfo = "pass";
console.log(passFailInfo);

let numericGrade : 2 | 3 | 4 | 5 | 6;
numericGrade = 4;
//numericGrade = 8;

type id = number;

type Person = {
    personalId: id;
    firstName: string;
    lastName: string;
    age: number;
}

let penchoPerson : Person = {
    personalId: 1,
    firstName: "Pencho",
    lastName: "Muncho",
    age: 19,
};

type Student = {
    school: string;
    gpa: number;
}

type FullSttudentProfile = Person & Student;

let muncho: FullSttudentProfile = {
    personalId: 2,
    firstName: "muncho",
    lastName: "kuncho",
    age: 11,
    school: "pomoshtnoto",
    gpa: 3.13
}
console.log(`${muncho.firstName} ${muncho.lastName} ${muncho.school} ${muncho.gpa}`);

type Point = {
    x: number;
    y: number;
}

type PartialPoint = {
    [K in keyof Point]?: Point[K]
}

let munchoPointa: PartialPoint = {
    x: 6,
}

type TreeNode = {
    value: number;
    leftNode?: TreeNode;
    rightNode?: TreeNode;
}

const leftLeaf: TreeNode = {
    value: 5,
}

const rightLeaf: TreeNode = {
    value: 10,
}

const root: TreeNode = {
    value: 1,
    leftNode: leftLeaf,
    rightNode: rightLeaf
}

interface Animal {
    name: string;
    age: number;
    makeSound: (sound: string) => void;
    //makeOtherSound(otherSound: string): void;
}

class Dog implements Animal{
    public name: string;
    public age: number;

    constructor(n: string, a: number){
        this.name = n;
        this.age = a;
    }

    makeSound(sound: string): void {
        console.log(sound);
    }
}

const doggie = new Dog("murdjo", 4);
doggie.makeSound("baw");

function multily(param1?: number | string, param2?: number | string, param3?: number | string){
    let num1 = param1 == undefined ? 1: Number(param1);
    let num2 = param2 == undefined ? 1: Number(param2);
    let num3 = param3 == undefined ? 1: Number(param3);
    return num1 * num2 * num3;
}

console.log(multily(2, undefined, '4'));

function operatorTask(
    param: string | number | string[], 
    operator: 'Index' | 'Length' | 'Add',
    operand: number){
    if(operator === 'Index' && typeof param !== 'number'){
        return param[operand];
    }
    if(operator === 'Length' && typeof param !== 'number'){
        return param.length % operand;
    }
    if(operator === 'Add' && !Array.isArray(param)){
        return Number(param) + operand;
    }
}

function createCar(
    carBody: {material: string, state: string, partName: string, runDiagnostics: () => string},
    tires: {airPressure: number, condition: string, partName: string, runDiagnostics: () => string},
    engine: {horsepower: number, oilDeensity: number, partName: string, runDiagnostics: () => string}
){

}

type httpCode = {code: 200 | 201 | 301, text: string};
type httpCodeWithPrintChars = {code: 400 | 404 | 500, text: string, printChars?: number};

function httpCodes(httpCode: httpCode | httpCodeWithPrintChars){
    switch(httpCode.code){
        case 200:
        case 201:
        case 301: console.log(httpCode.text); return;
        case 400:
        case 404:
        case 500: console.log(httpCode.text.slice(0, httpCode.printChars)); return;
    }
}

type gym = {number: 1, train:() => void} & ({hallway: 'A', pass?: 'Guest'} | {hallway: 'C'});
type restaurant = {number: 2, dine:() => void} & ({hallway: 'A', pass?: 'Guest'} | {hallway: 'C'});
type hotel = {number: 3, sleep:() => void, hallway: 'A' | 'C'}; 
type simplified = gym | restaurant | hotel;

// function visitFloor(floor:
// { number: 1, hallway: 'A', train:() => void, pass: 'Guest' } |
// { number: 2, hallway: 'A', dine: () => void, } |
// { number: 3, hallway: 'C', sleep:() => void} |
// { number: 1, hallway: 'C', train:() => void } |
// { number: 1, hallway: 'A', train:() => void } |
// { number: 2, hallway: 'A', dine: () => void, pass: 'Guest' } |
// { number: 3, hallway: 'A', sleep:() => void } |
// { number: 2, hallway: 'C', dine: () => void, }
// ) {
//     switch (floor.number) {
//     case 1: floor.train(); return;
//     case 2: floor.dine(); return;
//     case 3: floor.sleep(); return;
//     }
// }

function visitFloor(floor: simplified) {
    switch (floor.number) {
    case 1: floor.train(); return;
    case 2: floor.dine(); return;
    case 3: floor.sleep(); return;
    }
}

visitFloor({ train() { }, number: 1, hallway: 'A', pass: 'Guest' });
visitFloor({ dine() { }, number: 2, hallway: 'A' });
visitFloor({ sleep() { }, number: 3, hallway: 'C' });
visitFloor({ train() { }, number: 1, hallway: 'C' });
visitFloor({ train() { }, number: 1, hallway: 'A' });
visitFloor({ dine() { }, number: 2, hallway: 'A', pass: 'Guest' });
visitFloor({ sleep() { }, number: 3, hallway: 'A' }); visitFloor({ dine() { }, number: 2, hallway: 'C' });

let names = { fName: 'John', lName: 'Doe', age: 22, getPersonInfo() { return `${this.fName} ${this.lName}, age ${this.age}` } };

let locationNow = { city:'Boston', street: 'Nowhere street', number: 13, postalCode: 51225, getAddressInfo() { return `${this.street} ${this.number}, ${this.city} ${this.postalCode}`} };

type namesType = typeof names;
type locationsType = typeof locationNow;

function createCombinedFunction(names: namesType, location: locationsType){
    return function(combinedObject: namesType & locationsType){
        console.log(`Hello, ${combinedObject.getPersonInfo()} from ${combinedObject.getAddressInfo()}`);
    }
}

let combinedFunction = createCombinedFunction(names, locationNow); 
let combinedPerson = Object.assign({}, names, locationNow); 
combinedFunction(combinedPerson);


type User = {
    id: number | string,
    username: string,
    passwordHash: string | string[],
    status: 'Locked' | 'Unlocked' | 'Deleted',
    email?: string
}

function isUser(user: unknown): user is User{
    return user != undefined && typeof user === 'object' && 
    'id' in user && ((typeof user.id === 'number' && user.id > 100) || (typeof user.id === 'string' && user.id.length === 14)) &&
    'username' in user && (typeof user.username === 'string' && user.username.length >= 5 && user.username.length <= 10) &&
    'passwordHash' in user && ((typeof user.passwordHash === 'string' && user.passwordHash.length === 20) ||
    (Array.isArray(user.passwordHash) && user.passwordHash.length === 4 && user.passwordHash.every(x => typeof x === 'string' && x.length === 8))) &&
    'status' in user && typeof user.status === 'string' && ['Locked', 'Unlocked', 'Deleted'].includes(user.status);
}

let newUser = { id: '1234-abcd-5678', username: 'testing', passwordHash: '123456-123456-123456', status: 'Unlocked' };

console.log(isUser(newUser));


// function assignTask(
//     user: { username: string, signupDate: Date },
//     task: {
//     status: 'Logged' | 'Started' | 'InProgress' | 'Done',
//     title: string,
//     daysRequired: number,
//     assignedTo: {
//     username: string,
//     signupDate: Date
//     } | undefined,
//     changeStatus(newStatus: 'Logged' | 'Started' | 'InProgress' | 'Done'): void}) {
//         if (task.assignedTo == undefined) {
//         task.assignedTo = user;
//         console.log(`User ${user.username} assigned to task '${task.title}'`);
//         }
// }


type nUser = { username: string, signupDate: Date };
type Task = {
    status: 'Logged' | 'Started' | 'InProgress' | 'Done',
    title: string,
    daysRequired: number,
    assignedTo: User | undefined,
    changeStatus(newStatus: 'Logged' | 'Started' | 'InProgress' | 'Done'): void
};

function assignTask(user: nUser, task: Task){

}


let user = {
username: 'Margaret',
signupDate: new Date(2022, 1, 13),
passwordHash: 'random'}

let task1 = {
status: <'Logged' | 'Started' | 'InProgress' | 'Done'> 'Logged',
title: 'Need assistance',
daysRequired: 1,
assignedTo: undefined,
changeStatus(newStatus: 'Logged' | 'Started' | 'InProgress' | 'Done') {this.status = newStatus; }}

let task2 = {
status: <'Logged' | 'Started' | 'InProgress' | 'Done'> 'Done',
title: 'Test',
daysRequired: 12,
assignedTo: undefined, changeStatus(newStatus: 'Logged' | 'Started' | 'InProgress' | 'Done') { this.status = newStatus; }, 
moreProps: 300, 
evenMore: 'wow' } 

assignTask(user, task1); 
assignTask(user, task2);