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
