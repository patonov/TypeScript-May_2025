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